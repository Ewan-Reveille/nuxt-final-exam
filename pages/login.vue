<template>
    <UForm :state="formState" @submit="authenticate">
        <UFormField label="Password" name="password">
            <UInput type="password" v-model="formState.password" placeholder="Enter password" required />
        </UFormField>
        <UButton type="submit">Login</UButton>
    </UForm>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'admin',
});

const formState = reactive({
    password: ''
})

const authenticate = async () => {
    const { data, error } = await useFetch('api/auth/login', {
        method: 'POST',
        body: { password: formState.password }
    })

    if (!error.value) {
        await navigateTo('/admin');
    }
    return;
}

</script>