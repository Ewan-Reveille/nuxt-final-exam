<template>
    <h2 class="ml-5 text-xl font-semibold">Our store</h2>
    <UInput v-model="searchQuery" type="text" placeholder="Search products" class="ml-5 my-5 p-2 w-full max-w-md" />
    <ULoader v-if="loading" class="my-8" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4" v-if="filteredProducts?.length">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product :show-add-to-cart-button="true" />
    </div>
    <div v-else>
        <h3 class="w-full text-center my-12">No datas available... For now</h3>
    </div>
</template>

<script setup lang="ts">
import { ProductSchema, type Product } from '~~/types/product';
import z from 'zod';
import Fuse from 'fuse.js'

const searchQuery = ref('')
const ProductsSchema = z.array(ProductSchema)

const products = ref<Product[]>([]);
const filteredProducts = ref<Product[]>([])
const loading = ref(true);
let fuse: Fuse<Product> | null;

onMounted(() => {
    const datas = localStorage.getItem('products');
    if (!datas) return;
    try {
        const parsed = JSON.parse(datas);
        const validated = ProductsSchema.parse(parsed)
        products.value = validated

        fuse = new Fuse(validated, {
            keys: ['title', 'description', 'category'],
            threshold: 0.3,
        })
        filteredProducts.value = validated

    } catch (error) {
        console.error('Invalid product data in localStorage:', error)
    } finally {
        loading.value = false
    }
});

watch(searchQuery, (newQuery) => {
    if (!fuse || !newQuery) {
        filteredProducts.value = products.value
    } else {
        const result = fuse.search(newQuery)
        filteredProducts.value = result.map(res => res.item)
    }
});
</script>