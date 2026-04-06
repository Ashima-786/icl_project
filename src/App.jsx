import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import AddProduct from "./pages/AddProduct";
import Brand from "./pages/Brand";
import ProductDetails from "./pages/ProductDetails";
import Signup from "./pages/Signup";
import Splash from "./pages/Splash";
import Payment from "./pages/Payment";
import MyListings from "./pages/MyListings";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {

  const location = useLocation();

  return (
    <>
      {/* Hide Navbar on Splash, Login, Signup */}
      {location.pathname !== "/" &&
       location.pathname !== "/login" &&
       location.pathname !== "/signup" && <Navbar />}

      <Routes>

        <Route path="/" element={<Splash />} />

        <Route path="/home" element={<Home />} />

        <Route path="/marketplace" element={<Marketplace />} />

        <Route path="/add-product" element={<AddProduct />} />

        <Route path="/brands" element={<Brand />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/my-products" element={<MyListings />} />
      </Routes>
    </>
  );
}

export default App;