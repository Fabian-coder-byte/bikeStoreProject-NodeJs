const mongoose = require('mongoose')
const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A brand must have a name'],
    unique: true,
    trim: true,
    maxlength: [40, 'A brand name must have less or equal then 40 characters'],
    minlength: [10, 'A brand name must have more or equal then 10 characters'],
  },
  description: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
})
const Brand = mongoose.model('Brand', brandSchema)
module.exports = Brand
