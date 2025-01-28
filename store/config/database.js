const path = require('path');

// Supabase Database integration
module.exports = ({ env }) => ({
    connection: {
        client: "postgres",
        connection: {
            // connectionString: env('DATABASE_URL', 'libsql://hopey-vansh-khandelwal.turso.io'),
            // turso_token: eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJnaWQiOiI4ZDk2ZjM0NC02NWIxLTRmZTMtOWMwOC1lZjQ3N2ZmNWU2MTgiLCJpYXQiOjE3Mzc4ODY2NzF9.B9SQCg2yVJrRJABZ_ILWau - GIAoYKu803tB5N_wQgNemGNf7RxZ3YtWMORJCD6DvVITMn3Nn - OigagmY64CACA
            host: env('DATABASE_HOST', 'aws-0-ap-south-1.pooler.supabase.com'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'postgres'),
            user: env('DATABASE_USERNAME', 'postgres.dvgqwlcujxkupkpmbbkp'),
            password: env('DATABASE_PASSWORD', 'U2MYcVmK9vV0DNRK'),
            ssl: env.bool('DATABASE_SSL', false),
        },
        useNullAsDefault: true
    }
});



// Local Database
// module.exports = ({ env }) => {
//     const client = env('DATABASE_CLIENT', 'sqlite');

//     const connections = {
//         mysql: {
//             connection: {
//                 connectionString: env('DATABASE_URL'),
//                 host: env('DATABASE_HOST', 'localhost'),
//                 port: env.int('DATABASE_PORT', 3306),
//                 database: env('DATABASE_NAME', 'strapi'),
//                 user: env('DATABASE_USERNAME', 'strapi'),
//                 password: env('DATABASE_PASSWORD', 'strapi'),
//                 ssl: env.bool('DATABASE_SSL', false) && {
//                     key: env('DATABASE_SSL_KEY', undefined),
//                     cert: env('DATABASE_SSL_CERT', undefined),
//                     ca: env('DATABASE_SSL_CA', undefined),
//                     capath: env('DATABASE_SSL_CAPATH', undefined),
//                     cipher: env('DATABASE_SSL_CIPHER', undefined),
//                     rejectUnauthorized: env.bool(
//                         'DATABASE_SSL_REJECT_UNAUTHORIZED',
//                         true
//                     ),
//                 },
//             },
//             pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//         },
//         postgres: {
//             connection: {
//                 connectionString: env('DATABASE_URL'),
//                 host: env('DATABASE_HOST', 'localhost'),
//                 port: env.int('DATABASE_PORT', 3306),
//                 database: env('DATABASE_NAME', 'strapi'),
//                 user: env('DATABASE_USERNAME', 'strapi'),
//                 password: env('DATABASE_PASSWORD', 'strapi'),
//                 ssl: env.bool('DATABASE_SSL', false) && {
//                     key: env('DATABASE_SSL_KEY', undefined),
//                     cert: env('DATABASE_SSL_CERT', undefined),
//                     ca: env('DATABASE_SSL_CA', undefined),
//                     capath: env('DATABASE_SSL_CAPATH', undefined),
//                     cipher: env('DATABASE_SSL_CIPHER', undefined),
//                     rejectUnauthorized: env.bool(
//                         'DATABASE_SSL_REJECT_UNAUTHORIZED',
//                         true
//                     ),
//                 },
//                 schema: env('DATABASE_SCHEMA', 'public'),
//             },
//             pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//         },
//         sqlite: {
//             connection: {
//                 filename: path.join(
//                     __dirname,
//                     '..',
//                     env('DATABASE_FILENAME', 'data.db')
//                 ),
//             },
//             useNullAsDefault: true,
//         },
//     };

//     return {
//         connection: {
//             client,
//             ...connections[client],
//             acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
//         },
//     };
// };