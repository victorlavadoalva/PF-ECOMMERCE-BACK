const { Router } = require("express");
const productsRoutes = require("./productsRoutes/index");
const usersRoutes = require("./usersRoutes/index");
const ordersRoutes = require("./ordersRoutes/index");
const imageRoutes = require("./imagesRoutes/index");
const adminRoutes = require("./adminRoutes/index");
require("dotenv").config();

const router = Router();

router.use("/products", productsRoutes);
router.use("/users", usersRoutes);
router.use("/orders", ordersRoutes);
router.use("/images", imageRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
