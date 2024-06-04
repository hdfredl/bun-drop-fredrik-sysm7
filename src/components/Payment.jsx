import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confirmation from "./Confirmation";

function Payment({ cart, clearCart, user }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [ccv, setCcv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [showModal, setShowModal] = useState(false);
  const sendUserToHomeAndConfirm = useNavigate();

  let totalPrice = 0;

  if (cart) {
    cart.forEach((item) => {
      totalPrice += parseFloat(item.price) * item.quantity;
    });
  }

  const handleCloseModal = () => {
    // Töm cart vid köp
    clearCart();
    sendUserToHomeAndConfirm("/");
  };

  const handlePayment = (event) => {
    event.preventDefault();

    setShowModal(true);

    const orderDetails = {
      // Spara variabler i en  const Var
      name,
      address,
      phone,
      cardNumber,
      ccv,
      cart,
      totalPrice,
    };

    // om user är inloggad
    if (user) {
      const updatedOrders = [...user.orders, orderDetails];
      const updatedUser = { ...user, orders: updatedOrders };
      // spara till db
      fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        // -> order
        body: JSON.stringify({ orders: updatedOrders }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Order saved", data);

          // Ta setUser från Parent - App.jsx, lättare att ha den globalt än i en scope
          if (typeof setUser === "function") {
            setUser(updatedUser);
          }

          // if (setUser) {
          //   setUser(updatedUser);
          // }
        });
    }

    console.log("Payment details:", orderDetails);
  };

  return (
    <>
      <div className="form-container">
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h2>{item.title}</h2>
              {/* <img src={item.image} alt={item.title} className="img" /> */}
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <br />
          <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
          <br />
          <br />
        </div>
        <form onSubmit={handlePayment}>
          <div className="form-input-textbox">
            <label>Name</label>
            <input
              className="round-the-box"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-input-textbox">
            <label>Address</label>
            <input
              className="round-the-box"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-input-textbox">
            <label>Payment Method</label>
            <div className="form-radio-group">
              <label>
                <input
                  className="round-the-box"
                  type="radio"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Pay with card
              </label>
              <label>
                <input
                  className="round-the-box"
                  type="radio"
                  value="phone"
                  checked={paymentMethod === "phone"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Pay with Swish
              </label>
            </div>
          </div>
          {paymentMethod === "card" && (
            <>
              <div className="form-input-textbox">
                <label>Card Number (16 digits)</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  pattern="[0-9]{16}"
                  required
                />
              </div>
              <div className="form-input-textbox">
                <label>CCV (3 digits)</label>
                <input
                  type="text"
                  value={ccv}
                  onChange={(e) => setCcv(e.target.value)}
                  pattern="[0-9]{3}"
                  required
                />
              </div>
            </>
          )}
          {paymentMethod === "phone" && (
            <div className="form-input-textbox">
              <label>Enter your number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="0[0-9]{9}"
                required
              />
            </div>
          )}
          <button type="submit">Pay Now</button>
        </form>
      </div>
      <Confirmation show={showModal} onClose={handleCloseModal} />
    </>
  );
}
export default Payment;
