module.exports = ({ env }) => ({
    port: env.int('PORT', 1337),
    // url: env('PUBLIC_URL', 'https://localhost:3000/'),
    auth: {
        secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
        salt: env('API_TOKEN_SALT'),
    },
});