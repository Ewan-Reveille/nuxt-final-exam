<template>
    <div>
        <h1 class="w-full text-center text-2xl font-bold my-5">Admin page</h1>
        <ULoader v-if="loading" class="my-8" />
        <UButton @click="generateProducts()">Generate 200 Products</UButton>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: 'admin',
});

const generateProducts = async (nbrOfProducts: number = 200) => {
    const { data, error, loading } = await useFetch('/api/products', {
        method: 'POST',
        body: { count: nbrOfProducts }
    })
}

</script>

<style></style>