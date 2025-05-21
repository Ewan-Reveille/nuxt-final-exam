<template>
  <header class="w-full flex justify-evenly py-5 bg-gray-700">
    <div class="flex flex-nowrap items-center">
      <p class="mr-12 font-bold text-2xl">Store Website</p>
      <div class="flex gap-2 flex-nowrap font-semibold">
        <NuxtLink to="/">
          Main Page
        </NuxtLink>
        <NuxtLink to="/admin">
          Admin Page
        </NuxtLink>
      </div>
    </div>
    <NuxtLink to="/cart" class="flex flex-nowrap md:flex-wrap h-5 text-xl w-[100px] justify-between">
      <UIcon name="material-symbols:garden-cart" class="size-7" />
      <p>My cart</p>
    </NuxtLink>
  </header>
</template>

<script lang="ts" setup>

</script>

<style></style>