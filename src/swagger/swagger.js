const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Metadata info about our API
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Pixel Port API", version: "1.0.0" },
  },
  apis: [
    "src/routes/usersRoutes/index.js",
    "src/db/models/User.js",
    "src/routes/adminRoutes/index.js",
    "src/routes/imagesRoutes/index.js",
    "src/db/models/Order.js",
    "src/routes/ordersRoutes/index.js",
    "src/db/models/Product.js",
    "src/routes/productsRoutes/index.js",
  ],
};

//Docs en JSON Format
const swaggerSpec = swaggerJSDoc(options);

//Function to setup our docs
const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(
    `📃 Version 1 docs are available at http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };
