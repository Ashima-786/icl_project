import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaLeaf className="icon" />
        <h2>SustainWear</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/add-product">Sell</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;