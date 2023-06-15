const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
    valorations: [
      {
        type: Schema.Types.Mixed,
      },
    ],
    price: {
      type: Number,
      required: [true, "can't be blank"],
    },
    category: {
      type: String,
      required: [true, "can't be blank"],
    },
    platform: {
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
