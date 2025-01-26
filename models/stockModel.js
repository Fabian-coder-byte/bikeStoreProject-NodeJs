const mongoose = require('mongoose')
const stockSchema = new mongoose.Schema({
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
})
const Stock = mongoose.model('Stock', stockSchema)
module.exports = Stock
