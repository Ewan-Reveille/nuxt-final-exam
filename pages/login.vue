<template>
    <form @submit.prevent="authenticate">
        <input type="password" v-model="password" placeholder="Enter password" required />
        <button type="submit">Login</button>
    </form>
</template>

<script setup lang="ts">
const password = ref('')

const router = useRouter()

const authenticate = async () => {
    const { data, error } = await useFetch('api/auth/login', {
        method: 'POST',
        body: { password: password.value }
    })
}

definePageMeta({
    middleware: 'admin',
});
</script>