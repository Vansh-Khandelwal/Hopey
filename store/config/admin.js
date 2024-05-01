module.exports = ({ env }) => ({
    url: 'https://hopey.onrender.com/',
    auth: {
        secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
        salt: env('API_TOKEN_SALT'),
    },
});