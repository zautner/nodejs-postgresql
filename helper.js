
/**
 * calculate offset
 *
 * @param {number} [currentPage=1]
 * @param {*} listPerPage
 * @return {*}
 */
function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage]
}
/**
 * normalize rows array
 *
 * @param {*} rows
 * @return {*}
 */
function emptyOrRows(rows) {
  if (!rows) {
    return []
  }
  return rows
}

module.exports = {
  getOffset,
  emptyOrRows,
}
