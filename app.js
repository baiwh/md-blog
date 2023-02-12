const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const urlHost = req.headers.host
  res.send(`lala:${urlHost}`)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('port:', port)
})