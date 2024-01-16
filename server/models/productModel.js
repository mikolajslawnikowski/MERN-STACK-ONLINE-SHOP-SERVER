const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    photo: { type: String, required: true },
    price: { type: Number, required: true },
    gender: { type: String, required: true },
    category: { type: String, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    quantity: { type: Number, required: true },
    shipping1: { type: Boolean, required: true },
    shipping2: { type: Boolean, required: true },
    rating: { type: Number, default: 0 },
    ratingSum: { type: Number, required: false },
    ratingCount: { type: Number, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
