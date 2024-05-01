module.exports = ({ env }) => ({
    url: env('STRAPI_BACKEND_URL'),
    auth: {
        secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
        salt: env('API_TOKEN_SALT'),
    },
});