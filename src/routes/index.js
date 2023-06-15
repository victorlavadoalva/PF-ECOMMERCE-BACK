const { Router } = require("express");
const productsRoutes = require("./productsRoutes/index");
const usersRoutes = require("./usersRoutes/index");
const ordersRoutes = require("./ordersRoutes/index");
const imageRoutes = require("./imagesRoutes/index");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const router = Router();

router.use("/products", productsRoutes);
router.use("/users", usersRoutes);
router.use("/orders", ordersRoutes);
router.use("/images", imageRoutes);
// router.use("/admin", adminRoutes);
router.post("/create-payment", async (req, res) => {
  let { amount } = req.body;
  amount *= 100;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.status(200).json(paymentIntent);
  } catch (e) {
    console.log(e);
    res.status(400).json(e.message);
  }
});

module.exports = router;
