const mongoose = require('mongoose')
const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A name must have a name'],
    trim: true,
  },
  cognome: {
    type: String,
    required: [true, 'A cognome must have a surname'],
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff'
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
})
const Brand = mongoose.model('Brand', brandSchema)
module.exports = Brand
