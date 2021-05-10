const config = require('./config')
const axios = require('axios')
axios.defaults.adapter = require('axios/lib/adapters/http')

test('index returns alive', async () => {
  const ret = await axios.get(`http://localhost:${config.port}`)
  console.log('checkng local server', ret)
  // expect(ret.data.message).toBe('alive')
})
test('quotas', async () => {
  const ret = await axios.get(`http://localhost:${config.port}/quotes?page=1`)
  const array10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  array10.forEach((v, i, a) => {
    console.log(`expected id: ${i+1}`)
    // expect(ret.data?.data?.[i].id).toBe((i + 1).toString())
  })
})

const quotes = require('./services/quotes')

test('database select config.listPerPage', async () => {
  const ret = await quotes.getMultiple(1)
  console.log({ret})
  expect(ret.data.length).toBe(config.listPerPage)
})

