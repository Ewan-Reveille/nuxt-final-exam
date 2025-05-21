<template>
    <form @submit.prevent="authenticate">
        <input
            type="password"
            v-model="password"
            placeholder="Enter password"
            required
        />
        <button type="submit">Login</button>
    </form>
</template>

<script setup lang="ts">
const password = ref('')

const authenticate = async () => {
    await useFetch('api/auth/login', {
        method: 'POST',
        body: { password: password.value }
    })
}
</script>