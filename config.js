const env = process.env

const config = {
  db: {/* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'localhost',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'rapidapi_adm',
    password: env.DB_PASSWORD || 'rapidapi',
    database: env.DB_NAME || 'rapidapi_adm',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
  port: env.PORT || 3000,
}

module.exports = config
console.log({config})
