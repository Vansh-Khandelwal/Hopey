module.exports = ({ env }) => ({
    url: env('PUBLIC_URL', 'https://hopey.onrender.com/admin'),
    auth: {
        secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
        salt: env('API_TOKEN_SALT'),
    },
});