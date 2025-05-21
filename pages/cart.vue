<template>
    <div v-if="cart.length" class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard v-for="product in cart" :key="product.id" :product="product" :showAddToCartButton="false" />
    </div>
    <div v-else>
        <h2 class="w-full text-center my-12">You didn't add anything to your cart... Yet</h2>
    </div>
</template>

<script setup lang="ts">
import { useCart } from '~~/composables/cart';

const { cart } = useCart();
</script>