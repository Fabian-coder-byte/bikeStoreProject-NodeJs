const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A brand must have a name'],
    unique: true,
    trim: true,
  },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  price: {
    type: Number,
    required: [true, 'A product must have a price'],
  },
})
const Product = mongoose.model('Product', productSchema)
module.exports = Product
