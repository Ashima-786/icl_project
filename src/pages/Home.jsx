import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import FeatureCard from "../components/FeatureCard";
import ScoreCard from "../components/ScoreCard";
import products from "../data/products";

function Home() {

  const features = [
    {
      icon: "🌱",
      title: "Eco Friendly Brands",
      description: "We verify brands based on sustainability practices."
    },
    {
      icon: "♻️",
      title: "Reduce Fashion Waste",
      description: "Promote resale and reduce environmental impact."
    },
    {
      icon: "⭐",
      title: "Sustainability Score",
      description: "Each brand gets verified sustainability rating."
    }
  ];


  const brands = [
    {
      brand: "EcoWear",
      score: 85,
      level: "high"
    },
    {
      brand: "GreenStyle",
      score: 65,
      level: "medium"
    },
    {
      brand: "FastFashion",
      score: 35,
      level: "low"
    }
  ];


  return (
    <div className="home">

      {/* Hero Section */}
      <div className="hero">
        <h1>Sustainable Fashion Marketplace 🌱</h1>

        <p>
          Buy and sell eco-friendly fashion. Promote sustainability 
          and reduce fashion waste.
        </p>

        <div className="hero-buttons">
          <Link to="/marketplace">
            <button className="btn-primary">Explore Marketplace</button>
          </Link>

          <Link to="/add-product">
            <button className="btn-secondary">Sell Product</button>
          </Link>
        </div>
      </div>


      {/* Features Section */}
      <div className="features">
        <h2>Why Sustainable Fashion?</h2>

        <div className="feature-cards">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>


      {/* Score Section */}
      <div className="score-section">
        <h2>Brand Sustainability Score</h2>

        <div className="score-cards">
          {brands.map((brand, index) => (
            <ScoreCard
              key={index}
              brand={brand.brand}
              score={brand.score}
              level={brand.level}
            />
          ))}
        </div>
      </div>


      {/* Products Section */}
      <div className="products-section">
        <h2>Featured Sustainable Products</h2>

        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
            />
          ))}
        </div>
      </div>


      {/* Footer */}
      <div className="footer">

        <div className="footer-content">

          <div>
            <h3>SustainWear 🌱</h3>
            <p>Promoting sustainable fashion and reducing waste.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <p>Home</p>
            <p>Marketplace</p>
            <p>Sell Product</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>Email: sustainwear@gmail.com</p>
            <p>Phone: +91 9876543210</p>
          </div>

        </div>

        <hr />

        <p className="copyright">
          © 2026 SustainWear | Sustainable Fashion Marketplace
        </p>

      </div>

    </div>
  );
}

export default Home;