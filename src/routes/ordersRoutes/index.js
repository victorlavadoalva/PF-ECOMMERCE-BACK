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
      <html>
      <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #003366; text-align: center; padding: 20px;">
            <img src="https://us.123rf.com/450wm/asmati/asmati1704/asmati170401816/75904360-muestra-de-bolsas-de-compras-vector-icono-negro-plano-en-c%C3%ADrculo-blanco-con-sombra-en-el-fondo.jpg" alt="Logo" style="max-width: 150px;">
          </div>
          <div style="background-color: #ffffff; padding: 20px;">
            <h1 style="color: #333; text-align: center;">Purchase Confirmation</h1>
            <p style="color: #666;">Dear User,</p>
            <p style="color: #666;">Thank you for your purchase! We are delighted to inform you that your order has been successfully processed.</p>
      
            <p style="color: #666;">Total amount: ${cart.total}</p>
            <p style="color: #666;">You will receive a separate email with the shipping details soon.</p>
            <p style="color: #666;">If you have any questions or need further assistance, please don't hesitate to contact our customer support.</p>
            <p style="color: #666;">Best regards,</p>
            <p style="color: #666;">The Team at Our Platform</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 10px; text-align: center; font-size: 12px; color: #666666;">
            <p>© 2023 Our Platform. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
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
