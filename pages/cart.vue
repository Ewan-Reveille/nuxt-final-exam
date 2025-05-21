<template>
    <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard v-for="product in cart" :key="product.id" :product="product" :showAddToCartButton="false" />
    </div>
</template>

<script setup lang="ts">
import { useCart } from '~~/composables/cart';

const { cart } = useCart();
</script>