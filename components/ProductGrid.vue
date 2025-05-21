<template>
    <h2 class="ml-5 text-xl font-semibold">Our store</h2>
    <ULoader v-if="loading" class="my-8" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4" v-if="products?.length">
        <ProductCard v-for="product in products" :key="product.id" :product :show-add-to-cart-button="true" />
    </div>
    <div v-else>
        <h3 class="w-full text-center my-12">No datas available... For now</h3>
    </div>
</template>

<script setup lang="ts">
import { ProductSchema, type Product } from '~~/types/product';
import z from 'zod';
const ProductsSchema = z.array(ProductSchema)

const products = ref<Product[]>([]);
const loading = ref(true);

onMounted(() => {
    const datas = localStorage.getItem('products');
    if (!datas) return;
    try {
        const parsed = JSON.parse(datas);
        const validated = ProductsSchema.parse(parsed)
        products.value = validated
    } catch (error) {
        console.error('Invalid product data in localStorage:', error)
    } finally {
        loading.value = false
    }
})
</script>