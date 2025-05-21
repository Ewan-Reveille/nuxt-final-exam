import { z } from 'zod'

export const ProductSchema = z.object({
    id: z.string(),
    title: z.string(),
    price: z.number().min(2),
    image: z.string().url(),
    description: z.string(),
    rating: z.number().min(1).max(5),
    category: z.string()
})

export type Product = z.infer<typeof ProductSchema>