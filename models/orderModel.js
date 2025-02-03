const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'An order must have a customer'],
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'cancelled'],
    default: 'pending',
  },
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  deliveryDate: {
    type: Date,
  },
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store',
  },
  orderItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'OrderItem',
    },
  ],
})
const Order = mongoose.model('Order', orderSchema)
module.exports = Order

