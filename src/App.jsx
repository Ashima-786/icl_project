import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import AddProduct from "./pages/AddProduct";
import Brand from "./pages/Brand";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/marketplace" element={<Marketplace />} />

        <Route path="/add-product" element={<AddProduct />} />

        <Route path="/brands" element={<Brand />} />

        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;