import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const category = query.category as string | undefined

  try {
    const articles = await prisma.article.findMany({
      where: category ? { category } : undefined,
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: {
            name: true
          }
        }
      }
    })
    return { success: true, data: articles }
  } catch (error) {
    return createError({ statusCode: 500, message: 'Failed to fetch articles' })
  }
})
