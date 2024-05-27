import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Menu from "./pages/menu";
import LogIn from "./pages/login";
import Favorites from "./pages/favorites";
import Cart from "./components/Cart";
import Confirmation from "./components/Confirmation";
import Payment from "./components/Payment";
import Home from "./pages/home";
import logoBlack from "./images/bun-drop-images/logo-black.png";
import Menu from "./components/Menu";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // function addToCart(item) {
  //   setCart((prevCart) => [...prevCart, item]);
  // }

  function addToCart(item) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? // Om samma id finns, adda 1
              { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  }

  function updateQuantity(itemId, amount) {
    setCart((prevCart) => {
      // Se så carItem.Id stämmer överens med itemId
      return prevCart.map((cartItem) =>
        // Om den gör, +1
        cartItem.id === itemId
          ? { ...cartItem, quantity: Math.max(1, cartItem.quantity + amount) }
          : cartItem
      );
    });
  }

  function removeFromCart(itemId) {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== itemId)
    );
  }

  // Töm, kart
  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Router>
        <div>
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
                <Route
                  path="/cart"
                  element={
                    <Cart
                      cart={cart}
                      updateQuantity={updateQuantity}
                      removeFromCart={removeFromCart}
                    />
                  }
                />
                <Route path="/login" element={<LogIn />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route
                  path="/payment"
                  element={<Payment cart={cart} clearCart={clearCart} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
