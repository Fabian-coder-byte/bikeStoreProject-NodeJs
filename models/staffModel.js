const mongoose = require('mongoose')
const staffSchema = new mongoose.Schema({
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
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' }, // Relazione con il modello Store
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
})
const Staff = mongoose.model('Staff', staffSchema)
module.exports = Staff
