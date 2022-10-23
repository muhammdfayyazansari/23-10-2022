// console.log('I am module js. And I am running. ')
import express from "express"
const app = express()
const port = 3000

app.get('/water_melon', (req, res) => {
    console.log(`${req.ip} is asking for water melon`)
    res.send(`Here is some water melon for ${req.ip}`)
})
app.get('/food_chicken', (req, res) => {
    console.log(`${req.ip} is asking for food chicken`)
    res.send(`Here is some food chicken for ${req.ip}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})