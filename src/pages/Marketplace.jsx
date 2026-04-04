import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import staticProducts from "../data/products";

function Marketplace() {
  const [apiProducts, setApiProducts] = useState([]);
  const [brandFilter, setBrandFilter] = useState("All");
  const [scoreFilter, setScoreFilter] = useState("All");

  // 🔥 Fetch products from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setApiProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // 🔥 Combine static + API products
  const allProducts = [...staticProducts, ...apiProducts];

  // 🔍 Apply filters
  const filteredProducts = allProducts.filter((product) => {
    const brandMatch =
      brandFilter === "All" || product.brand === brandFilter;

    const scoreMatch =
      scoreFilter === "All" ||
      (scoreFilter === "80" && product.score >= 80) ||
      (scoreFilter === "60" && product.score >= 60) ||
      (scoreFilter === "50" && product.score < 50);

    return brandMatch && scoreMatch;
  });

  return (
    <div className="marketplace">
      <h2>Sustainable Marketplace 🌱</h2>

      {/* 🔽 Filters */}
      <div className="filters">
        {/* Brand Filter */}
        <select
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
        >
          <option value="All">All Brands</option>
          <option value="EcoWear">EcoWear</option>
          <option value="GreenStyle">GreenStyle</option>
          <option value="FastFashion">FastFashion</option>
        </select>

        {/* Score Filter */}
        <select
          value={scoreFilter}
          onChange={(e) => setScoreFilter(e.target.value)}
        >
          <option value="All">All Scores</option>
          <option value="80">Above 80</option>
          <option value="60">Above 60</option>
          <option value="50">Below 50</option>
        </select>
      </div>

      {/* 🛍 Products Grid */}
      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={product._id || index} // 🔥 important fix
              product={product}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Marketplace;