export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token');
    const config = useRuntimeConfig().public;

    const isAuthenticated = token && token.value === config.login_password;
    
    if (!isAuthenticated && to.fullPath !== '/login') {
        return navigateTo('/login');
    }

    if (isAuthenticated && to.fullPath === '/login') {
        return navigateTo('/admin');
    }
})