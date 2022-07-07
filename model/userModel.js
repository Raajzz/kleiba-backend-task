const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: [true, "First Name is a required field"],
    trim: true,
    maxlength: [30, "Length of the First Name must be less than 30 characters long"],
    minlength: [1, "Length of the First Name must be at least a character long"]
  },
  secondName: {
    type: String,
    trim: true,
    maxlength: [30, "Length of the First Name must be less than 30 characters long"],
    minlength: [1, "Length of the First Name must be at least a character long"]
  },
  userName: {
    type: String,
    required: [true, "User Name is a required field"],
    trim: true,
    maxlength: [20, "Length of the User Name must be less than 30 characters long"],
    minlength: [3, "Length of the First Name must be at least 3 character long"]
  },
  password: {
    type: String,
    required: [true, "Password is a required field"],
    trim: true,
    maxlength: [30, "Length of the Password must be less than 30 characters long"],
    minlength: [8, "Length of the Password must be at least 8 character long"]
  },
  age: {
    type: Number,
    min: [100, "Value of age must be lesser than 100"]
  },
  address: {
    type: String,
    trim: true,
    maxlength: [300, "Length of the address must be less than 300 characters"]
  }
})

module.exports = mongoose.model("User", UserSchema);