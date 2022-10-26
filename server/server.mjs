
import express from 'express'
const app = express()
const port = 3000

app.get('/water', (req, res) => {
  console.log(`${req.ip} want some water from you `)
  res.send('Here are some water  for you')
})
app.get('/food', (req, res) => {
  console.log(`${req.ip} want some food from you `)
  res.send('Here are some food for you')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})