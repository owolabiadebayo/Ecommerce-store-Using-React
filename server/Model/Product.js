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
    type: Buffer,
    contentType: String,
    required: "Image is required",
  },
});

export default mongoose.model("Product", product);
