const { Router } = require("express");

const usersRoutes = require("./usersRoutes/index");

const router = Router();

// router.use("/products", productsRoutes);
router.use("/users", usersRoutes);
// router.use("/admin", adminRoutes);

module.exports = router;
