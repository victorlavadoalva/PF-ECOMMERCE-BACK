const { Router } = require("express");
const productsRoutes = require("./productsRoutes/index");
const usersRoutes = require("./usersRoutes/index");
const ordersRoutes = require("./ordersRoutes/index");
const adminRoutes = require("./adminRoutes/index");
const attendancesRoutes = require("./attendancesRoutes/index");
require("dotenv").config();

const router = Router();

router.use("/products", productsRoutes);
router.use("/users", usersRoutes);
router.use("/orders", ordersRoutes);
router.use("/admin", adminRoutes);
router.use("/attendance", attendancesRoutes);

module.exports = router;
