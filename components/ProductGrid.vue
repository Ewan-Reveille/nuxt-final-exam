<template>
    <h2 class="ml-5 text-xl font-semibold">Our store</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4" v-if="data?.length">
        <ProductCard v-for="product in data" />
    </div>
    <div v-else>
        <h3 class="w-full text-center my-12">No datas available... For now</h3>
    </div>
</template>

<script setup lang="ts">
    const { data, error, loading, refresh } = await useFetch('/api/products');
</script>   