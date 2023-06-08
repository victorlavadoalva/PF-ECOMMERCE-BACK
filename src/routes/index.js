const { Router } = require("express");
const productsRoutes = require("./productsRoutes/index");
const usersRoutes = require("./usersRoutes/index");

const router = Router();

router.use("/products", productsRoutes);
router.use("/users", usersRoutes);
// router.use("/admin", adminRoutes);

module.exports = router;
