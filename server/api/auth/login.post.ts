import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    if (!body.email || !body.password) {
      throw createError({ statusCode: 400, message: 'Email and password are required' })
    }

    const user = await prisma.user.findUnique({
      where: { email: body.email }
    })

    // Very simple check for demonstration purposes. In production, use bcrypt!
    if (!user || user.password !== body.password) {
      throw createError({ statusCode: 401, message: 'Invalid credentials' })
    }

    // Set a simple cookie
    setCookie(event, 'auth_token', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    })

    return { success: true, user: { id: user.id, name: user.name, email: user.email } }
  } catch (error: any) {
    return createError({ statusCode: error.statusCode || 500, message: error.message || 'Login failed' })
  }
})
