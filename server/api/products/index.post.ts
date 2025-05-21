import { faker } from '@faker-js/faker'
import { ProductSchema } from "~~/types/product"

export default defineEventHandler(async (event) => {
    const { count } = await readBody(event)

    try {
        const db = useStorage('db')

        const products = []

        for (let i = 0; i < count; i++) {
            const uuid = crypto.randomUUID();
            const product = {
                id: uuid,
                title: faker.commerce.productName(),
                price: Number(faker.commerce.price({ min: 2 })),
                image: faker.image.url(),
                description: faker.commerce.productDescription(),
                rating: faker.number.float({ min: 1, max: 5 }),
                category: faker.commerce.department()
            }

            const parsed = ProductSchema.safeParse(product)
            if (!parsed.success) {
                return sendError(event, createError({
                    statusCode: 400,
                    statusMessage: 'Validation failed',
                    data: parsed.error.errors
                }))
            }
            products.push(parsed.data)
            await db.setItem(parsed.data.id, parsed.data)
        }

        return { success: true, products }
    } catch (error) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Internal server error'
        }))
    }
})