module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    // url: env('PUBLIC_URL', 'https://hopey.onrender.com'),
    proxy: env.bool('IS_PROXIED', true),
    app: {
        keys: env.array('APP_KEYS'),
    },
    cron: { enabled: true },
    cors: { enabled: true, origin: ['*'] },
    webhooks: {
        populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
});