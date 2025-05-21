<template>
    <UCard class="cursor-pointer hover:shadow-lg transition-all">
        <NuxtImg :src="product.image" :alt="product.title" class="w-full h-48 object-cover" />
        <div class="p-4">
            <h3 class="font-semibold mb-2">{{ product.title }}</h3>
            <p class="text-sm mb-1">{{ product.category }}</p>
            <p class="text-lg font-bold">{{ product.price.toFixed(2) }} €</p>
            <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Add to Cart
            </button>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import { type Product } from '~~/types/product'
const props = defineProps<{ product: Product }>()
</script>