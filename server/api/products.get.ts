import { Product, ProductSchema } from "~/types/product";
export default defineEventHandler(async(event) => {
    const query = getQuery(event);
    const maxLimit = 200;
    const minLimit = 20;

    const limit = Math.min(Number(query.limit) || minLimit, maxLimit);
    const page = Math.max(Number(query.page) || 1, 1);

    const storage = useStorage('db');
    const keys = await storage.getKeys()
    const paginatedKeys = keys.slice((page - 1) * limit, page * limit)
    
    const products: Product[] = [];

    for (const key of paginatedKeys) {
        const data = await storage.getItem(key)
    }

    return {
        page,
        limit, 
        products
    }
});