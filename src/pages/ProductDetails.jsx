import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const handleBuy = () => {
    navigate("/payment", {
      state: {
        product: product
      }
    });
  };

  return (
    <div className="product-details">

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="details-info">

        <h2>{product.name}</h2>

        <p>Brand: {product.brand}</p>

        <p>Sustainability Score: {product.score}/100</p>

        <h3>₹{product.price}</h3>

        <p>{product.description}</p>

        <button 
        className="btn-primary"
        onClick={handleBuy}
        >
          Buy Now
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;