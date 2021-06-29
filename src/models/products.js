"use strict";
const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  category: { type: String, required: true, default: "food" },
  name: { type: String, required: true, default: "Sample Product" },
  description: { type: String, default: "Description" },
  price: { type: Number, required: true, default: 50 },
  inventoryCount: { type: Number, required: true, default: 3 },
  image: { type: String },
  cartCount: { type: Number, default: 0 },
});

const products = mongoose.model("product", productsSchema);
module.exports = products;
