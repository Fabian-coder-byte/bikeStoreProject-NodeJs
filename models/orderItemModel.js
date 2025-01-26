const mongoose = require('mongoose')
const orderItemSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0,
  }
});
const OrderItem = mongoose.model('OrderItem', orderItemSchema)
module.exports = OrderItem
