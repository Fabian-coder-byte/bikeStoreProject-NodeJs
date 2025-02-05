const mongoose = require("mongoose");
const carrelloSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A category must have a name"],
    unique: true,
    trim: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  data: {
    type: Date,
    default: Date.now,
  },
});
const Carrello = mongoose.model("Carrello", carrelloSchema);
module.exports = Carrello;
