const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"],
    },
    description: {
      type: String,
      required: [true, "can't be blank"],
    },
    price: {
      type: Number,
      required: [true, "can't be blank"],
    },
    type: {
      type: String,
      default: "Sin tipo",
    },
    category: {
      type: String,
      required: [true, "can't be blank"],
    },
    gender: {
      type: String,
      default: "Sin genero",
    },
    pictures: {
      type: Array,
      required: true,
    },
    stock: {
      type: Number,
      require: true,
    },
  },
  { minimize: false }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
