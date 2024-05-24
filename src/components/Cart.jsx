import React from "react";

// GÖR TILL MODAL
function Cart({ cart }) {
  let totalPrice = 0;
  console.log("Cart in Cart component:", cart);
  //debugger;

  // Räkna ut total pris
  if (cart) {
    cart.forEach((item) => {
      totalPrice += parseFloat(item.price);
    });
  }

  console.log("cart:", cart);
  //debugger;

  return (
    <>
      <div>Cart Page</div>
      <div>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      <div>
        {cart && cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title} className="img" />
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Cart;
