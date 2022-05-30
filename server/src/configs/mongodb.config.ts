const env = process.env

const mongoConfig = {
    host: env.MONGODB_HOST,
    user: env.MONGODB_USER,
    password: env.MONGODB_PASSWORD,
    database: env.MONGODB_NAME || 'programming_languages',
    atlas_uri: env.MONGODB_ATLAS_URI,
    port: env.MONGODB_PORT || 3306,

}

export { mongoConfig }