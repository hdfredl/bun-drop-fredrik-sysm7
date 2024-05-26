import React from "react";
import { Link } from "react-router-dom";

// GÖR TILL MODAL
function Cart({ cart, updateQuantity, removeFromCart }) {
  let totalPrice = 0;
  console.log("Cart in Cart component:", cart);
  //debugger;

  // Räkna ut total pris
  if (cart) {
    cart.forEach((item) => {
      totalPrice += parseFloat(item.price) * item.quantity;
    });
  }

  console.log("cart:", cart);
  //debugger;

  return (
    <>
      <div>
        {/* Om cart är >0 ingen paymento */}
        {cart.length > 0 && (
          <Link to="/payment">
            <button>Go to payment</button>
          </Link>
        )}
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      <div>
        {cart && cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h2>
                {item.title}
                <button onClick={() => removeFromCart(item.id)}>X</button>
              </h2>
              <img src={item.image} alt={item.title} className="img" />
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => updateQuantity(item.id, 1)}>
                Add amount
              </button>
              <button onClick={() => updateQuantity(item.id, -1)}>
                Decrease amount
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Cart;
