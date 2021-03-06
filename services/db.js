const {Pool} = require('pg')
const config = require('../config')
const pool = new Pool(config.db)
console.log({pool})
/**
 * Query the database using the pool
 * @param {*} query
 * @param {*} params
 *
 * @see https://node-postgres.com/features/pooling#single-query
 */
async function query(query, params) {
  const {rows, fields} = await pool.query(query, params)
  console.log({fields})
  return rows
}

module.exports = {
  query,
}
