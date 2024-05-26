import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confirmation from "./Confirmation";

function Payment({ cart, clearCart }) {
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

  const handlePayment = (event) => {
    event.preventDefault();

    setShowModal(true);

    console.log("Payment derails:", {
      name,
      address,
      phone,
      cardNumber,
      ccv,
      cart,
    });
  };

  const handleCloseModal = () => {
    clearCart();
    sendUserToHomeAndConfirm("/");
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
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-input-textbox">
            <label>Address</label>
            <input
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
                  type="radio"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Pay with card
              </label>
              <label>
                <input
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
