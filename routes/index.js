const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/ping', function(req, res, next) {
  res.send('<H1>s</H1><p>pong</p>')
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'alive'})
})
module.exports = router
