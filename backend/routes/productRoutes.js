const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new product with AUTO score calculation
router.post("/", async (req, res) => {
  try {
    const {
      name,
      brand,
      price,
      description,
      image,
      material,
      recyclable,
      carbonLevel,
    } = req.body;

    // 🔥 AUTO SCORE CALCULATION
    let score = 0;

    // Material contribution
    if (material === "Organic") score += 40;
    else if (material === "Recycled") score += 35;
    else if (material === "Synthetic") score += 10;

    // Recyclable contribution
    if (recyclable === "Yes") score += 30;

    // Carbon footprint contribution
    if (carbonLevel === "Low") score += 30;
    else if (carbonLevel === "Medium") score += 20;
    else if (carbonLevel === "High") score += 10;

    // ✅ Create product with calculated score
    const newProduct = new Product({
      name,
      brand,
      price,
      description,
      image,
      score,
      material,
      recyclable,
      carbonLevel,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;