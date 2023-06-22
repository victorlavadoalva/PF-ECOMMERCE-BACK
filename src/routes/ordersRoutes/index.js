const { Router } = require("express");
// const transporter = require("../../../config/mailer");
const transporter = require("../../config/mailer");
const verifyToken = require("../../utils/jwt");

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
    //notificacion a correo:
    await transporter.sendMail({
      from: '"Purchase succesfull 👻" <victorlavado15@gmail.com>', // sender address
      to: `${user.email}, ${user.email}`, // list of receivers
      subject: "Purchase succesfull", // Subject line
      // text: "Hello world?", // plain text body
      html: `
          <h1>Purchase succesfull</h1>
      <p>Dear User,</p>
      <p>Thank you for shopping with us. Your purchase has been successful.</p>
      <h2>Total Order:</h2>
      <ul>
      ${cart.total}
    </ul>
    <p>For any questions or concerns, please contact our customer support.</p>
    <p>Best regards,</p>
    <p>The Team at Our Store</p>
          `, // html body
    });

    res.status(200).json(user);
  } catch (e) {
    res.status(400).json(e);
  }
});

// Obteniendo todas las ordenes;
api.get("/", verifyToken, async (req, res) => {
  try {
    const orders = await Order.find().populate("owner", ["email", "name"]);
    res.status(200).json(orders);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = api;
