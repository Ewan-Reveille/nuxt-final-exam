export default defineEventHandler(async (event) => {
    const { password } = await readBody(event);
    const config = useRuntimeConfig();
    
    if (!password) {
        setResponseStatus(event, 401);
        return { error: "Please, set a password" };
    }

    if (password !== config.login_password) {
        setResponseStatus(event, 401);
        return { error: "The password is incorrect." };
    }

    setCookie(event, 'token', password, {
        maxAge: 60 * 60
    });

    return { success: true };
});