const mongoose = require("mongoose");

const signIn = new mongoose.Schema({
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
});

export default mongoose.model("Login", signIn);
