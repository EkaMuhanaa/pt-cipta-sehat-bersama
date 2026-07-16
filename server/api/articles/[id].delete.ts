import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({ statusCode: 400, message: 'ID is required' })
  }

  try {
    await prisma.article.delete({
      where: { id }
    })

    return { success: true, message: 'Article deleted successfully' }
  } catch (error: any) {
    return createError({ statusCode: 500, message: error.message || 'Failed to delete article' })
  }
})
