const mongoose = require("mongoose")

const ToySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is a required field"],
    trim: true,
    maxlength: [30, "Length of the Name must be less than 30 characters long"],
    minlength: [1, "Length of the Name must be at least a character long"]
  },
  producerName: {
    type: String,
    required: [true, "Producer Name is a required field"],
    trim: true,
    maxlength: [30, "Length of the Producer Name must be less than 30 characters long"],
    minlength: [1, "Length of the Producer Name must be at least a character long"]
  },
  description: {
    type: String,
    trim: true,
    maxlength: [300, "Length of the description must be less than 300 characters"]
  },
  price: {
    type: Number,
    required: [true, "Price of the toy is a required field"]
  }
})

module.exports = mongoose.model("Toy", ToySchema);