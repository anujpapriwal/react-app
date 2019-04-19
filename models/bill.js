const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const BillSchema = new Schema({
  vname: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    required: true
  },
  wallet: {
    type: Number,
    required: true
  },
  note: {
    type: String,
    default: 'Empty'
  },
  img: {
    data: Buffer,
    contentType: String
  }
})

module.exports = Bill = mongoose.model('bill', BillSchema)
