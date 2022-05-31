const mongoConfig = {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
}

export { mongoConfig }