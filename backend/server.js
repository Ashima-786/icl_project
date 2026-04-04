const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Import Routes
const productRoutes = require("./routes/productRoutes");

// ✅ Use Routes
app.use("/api/products", productRoutes);

// Debug
console.log("MONGO_URI:", process.env.MONGO_URI);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("✅ MongoDB Connected Successfully");
})
.catch((err) => {
  console.error("❌ MongoDB Error:", err.message);
});

// Test Route
app.get("/", (req, res) => {
  res.send("SustainWear API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});