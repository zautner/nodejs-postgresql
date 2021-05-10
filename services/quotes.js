const db = require('./db')
const helper = require('../helper')
const config = require('../config')
/**
 * get all quotas for the page #page
 *
 * @param {number} [page=1]
 * @return {*}
 */
async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage)
  const rows = await db.query(
      'SELECT id, quote, author FROM quote OFFSET $1 LIMIT $2',
      [offset, config.listPerPage],
  )
  const data = helper.emptyOrRows(rows)
  const meta = {page}

  return {
    data,
    meta,
  }
}
/**
 * Create quota
 *
 * @param {*} quote
 * @return {*}
 */
async function create(quote) {
  const result = await db.query(
      'INSERT INTO quote(quote, author) VALUES ($1, $2) RETURNING *',
      [quote.quote, quote.author],
  )
  let message = 'Error in creating quote'

  if (result.length) {
    message = 'Quote created successfully'
  }

  return {message}
}

module.exports = {
  getMultiple,
  create,
}
module.exports = {
  getMultiple, create,
}
