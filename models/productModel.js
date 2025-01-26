const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A brand must have a name'],
    unique: true,
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'A product must have a category']
  },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
})
const Product = mongoose.model('Product', productSchema)
module.exports = Product
