const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema(
  {
    products: {
      type: Object,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      default: "processing",
    },
    total: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
    date: {
      type: String,
      default: new Date().toISOString().split("T")[0],
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  { minimize: false }
);

/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           readOnly: true
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         products:
 *           type: object
 *           example: { "product1": 2, "product2": 1 }
 *         owner:
 *           type: string
 *           format: uuid
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         status:
 *           type: string
 *           example: processing
 *         total:
 *           type: number
 *           example: 100
 *         count:
 *           type: number
 *           example: 3
 *         date:
 *           type: string
 *           example: 2022-12-31
 *         address:
 *           type: string
 *         country:
 *           type: string
 */

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
