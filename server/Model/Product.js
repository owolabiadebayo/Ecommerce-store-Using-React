const mongoose = require("mongoose");
const product = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: "Title is required",
  },
  description: {
    type: String,
    required: "Decription is required",
  },
  price: {
    type: Number,
    trim: true,
    required: "Price is required",
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

export default mongoose.model("Product", product);
