import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Menu from "./pages/menu";
import LogIn from "./pages/login";
import Favorites from "./pages/favorites";
import Cart from "./components/Cart";
import Confirmation from "./pages/confirmation";
import Payment from "./pages/payment";
import Home from "./pages/home";
import logoBlack from "./images/bun-drop-images/logo-black.png";
import Menu from "./components/Menu";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  return (
    <>
      <Router>
        <div>
          <nav className="navbar">
            <img src={logoBlack} alt="logo-black" className="nav-logo" />
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/cart">Cart</Link>
            {/* <Link to="/confirmation">Confirmation</Link> */}
            {/* <Link to="/payment">Payment</Link> */}
            <Link to="/login">Log In</Link>
          </nav>
          <div className="horizontal">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu buyFood={addToCart} />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/cart" element={<Cart cart={cart} />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
