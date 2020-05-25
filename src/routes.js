const express = require("express");
const router = express.Router();
const ProductController = require("./controllers/ProductController");

router.get("/products", ProductController.index);
router.get("/products/:id", ProductController.show);
router.post("/products", ProductController.create);
router.put("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.delete);

module.exports = router;