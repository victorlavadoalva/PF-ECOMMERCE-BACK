const { Router } = require("express");

const Order = require("../../db/models/Order");
const User = require("../../db/models/User");
const api = Router();

//posteando/creando la orden
api.post("/", async (req, res) => {
  const { userId, cart, country, address, paymentStatus } = req.body;
  try {
    const user = await User.findById(userId);
    console.log(user);
    const order = await Order.create({
      owner: user._id,
      products: cart,
      country,
      address,
      status: paymentStatus,
    });
    console.log("ordeR:", order);
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
  try {
    const orders = await Order.find().populate("owner", ["email", "name"]);
    res.status(200).json(orders);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

//comprando la orden

api.patch("/:id/mark-shipped", async (req, res) => {
  const io = req.app.get("socketio");
  const { ownerId } = req.body;
  const { id } = req.params;
  try {
    const user = await User.findById(ownerId);
    await Order.findByIdAndUpdate(id, { status: "shipped" });
    const orders = await Order.find().populate("owner", ["email", "name"]);
    const notification = {
      status: "unread",
      message: `Order ${id} shipped with success`,
      time: new Date(),
    };
    io.sockets.emit("notification", notification, ownerId);
    user.notifications.push(notification);
    await user.save();
    res.status(200).json(orders);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = api;
