const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var db = require('./models/db')
var Bill = require('./models/bill')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/api/bills', (req, res) => {
  Bill.find({})
    .then(bills => {
      res.json(bills)
    })
    .catch(err => {
      res.json(err)
    })
})

app.post('/api/bills', (req, res) => {
  var newBill = new Bill({
    vname: req.body.vname,
    category: req.body.category,
    wallet: req.body.wallet,
    note: req.body.note
  })
  newBill.save(function (err) {
    if (err) {
      res.json(err)
    } else {
      res.json('Bill saved')
    }
  })
})

const port = 5000

app.listen(port, () => `Server running on port ${port}`)
