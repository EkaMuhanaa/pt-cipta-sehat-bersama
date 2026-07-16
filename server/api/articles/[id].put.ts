import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  if (!id) {
    throw createError({ statusCode: 400, message: 'ID is required' })
  }

  try {
    const article = await prisma.article.update({
      where: { id },
      data: {
        title: body.title,
        slug: body.slug,
        content: body.content,
        excerpt: body.excerpt,
        category: body.category,
        imageUrl: body.imageUrl,
        isPublished: body.isPublished
      }
    })

    return { success: true, data: article }
  } catch (error: any) {
    return createError({ statusCode: 500, message: error.message || 'Failed to update article' })
  }
})
