import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">

        <h3>{product.name}</h3>

        <p className="brand">
          Brand: {product.brand}
        </p>

        <p className="score">
          Sustainability Score: {product.score}/100
        </p>

        <p className="price">
          ₹{product.price}
        </p>

        <Link to={`/product/${product.id}`}>
          <button className="view-btn">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;