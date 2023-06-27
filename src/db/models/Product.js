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
        id_cliente: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        comment: {
          type: String,
        },
        rating: {
          type: Number,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
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
    isActive: {
      type: Boolean,
      default:true
    },
    stock: {
      type: Number,
      require: true,
    },
  },
  { minimize: false }
);

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           readOnly: true
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name:
 *           type: string
 *           example: Product Name
 *         description:
 *           type: string
 *           example: Product Description
 *         valorations:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_cliente:
 *                 type: string
 *                 format: uuid
 *                 example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *               comment:
 *                 type: string
 *               rating:
 *                 type: number
 *                 example: 4.5
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: 2022-12-31T12:00:00Z
 *         price:
 *           type: number
 *           example: 99.99
 *         category:
 *           type: string
 *           example: Electronics
 *         platform:
 *           type: string
 *           example: Sin género
 *         pictures:
 *           type: array
 *           items:
 *             type: string
 *           example: ["image1.jpg", "image2.jpg"]
 *         stock:
 *           type: number
 *           example: 10
 */

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
