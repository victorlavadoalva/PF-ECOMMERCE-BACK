const { Router } = require("express");

const Order = require("../../db/models/Order");
const User = require("../../db/models/User");
const api = Router();

//posteando/creando la orden
api.post("/", async (req, res) => {
  const { userId, cart, country, address, paymentStatus } = req.body;

  try {
    const user = await User.findById(userId);
    const order = await Order.create({
      owner: user._id,
      products: cart,
      country,
      address,
      status: paymentStatus,
    });
    order.count = cart.count;
    order.total = cart.total;
    await order.save();
    user.cart = { total: 0, count: 0 };
    user.orders.push(order);
    user.markModified("orders");
    await user.save();

    res.status(200).json(user);
  } catch (e) {
    res.status(400).json(e);
  }
});

// Obteniendo todas las ordenes;
api.get("/", async (req, res) => {
  const { id } = req.query;
  console.log(id);
  if (id) {
    const orders = await Order.find({ owner: id });
    const filteredProperties = orders.map((order) => {
      const keys = Object.keys(order.products);
      return keys.filter((key) => key !== "count" && key !== "total");
    });

    const uniqueItems = [...new Set(filteredProperties.flat())];

    res.status(200).json(uniqueItems);
  } else {
    try {
      const orders = await Order.find().populate("owner", ["email", "name"]);
      res.status(200).json(orders);
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
});

module.exports = api;
