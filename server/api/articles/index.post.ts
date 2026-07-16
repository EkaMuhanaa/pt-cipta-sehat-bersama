import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    // Basic validation
    if (!body.title || !body.slug || !body.content || !body.category) {
      throw createError({ statusCode: 400, message: 'Missing required fields' })
    }

    // In a real app, authorId would come from the auth session.
    // We will hardcode it for now or check if there's a user, if not create one.
    let user = await prisma.user.findFirst()
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: 'admin@ciptasehat.com',
          password: 'hashedpassword',
          name: 'Admin'
        }
      })
    }

    const article = await prisma.article.create({
      data: {
        title: body.title,
        slug: body.slug,
        content: body.content,
        excerpt: body.excerpt,
        category: body.category,
        imageUrl: body.imageUrl,
        isPublished: body.isPublished ?? true,
        authorId: user.id
      }
    })

    return { success: true, data: article }
  } catch (error: any) {
    return createError({ statusCode: 500, message: error.message || 'Failed to create article' })
  }
})
