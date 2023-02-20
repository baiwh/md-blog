const express = require('express')
const app = express()

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000," + req?.headers?.origin)
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  next()
})

app.get('/api/lala', (req, res) => {
  const urlHost = req.headers.host
  console.log(`corscors`, req.headers)
  // res.send(`lala:试试看`)
  res.json({ msg: 'lala:试试看' })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('port:', port)
})