const mongoose = require("mongoose");

const signUp = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: "Email is required",
  },
  password: {
    type: String,
    min: 6,
    max: 64,
    required: "Password is required",
  },
  firstName: {
    type: String,
    trim: true,
    required: "First name is required",
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last name is required",
  },
});

export default mongoose.model("Register", signUp);
