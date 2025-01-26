const mongoose = require('mongoose')
const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A store must have a name'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  street: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  zipCode: {
    type: String,
    trim: true,
  },
  staffs: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' }
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
})
const Store = mongoose.model('Store', storeSchema)
module.exports = Store
