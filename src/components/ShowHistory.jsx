import React, { useEffect, useState } from "react";

function ShowHistory({ orders, onClose }) {
  return (
    <>
      <div className="modal-history">
        <div className="modal-history-desgin">
          <button onClick={onClose}>X</button>
          <h2>Order History</h2>
          {/* Gå igenom orders objekt */}
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <div key={index} className="order-kvitto">
                <h3>Order {index + 1}</h3>
                <p>Name: {order.name}</p>
                <p>Address: {order.address}</p>
                <p>Phone: {order.phone}</p>
                <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
                {order.cart.map((item, itemIndex) => (
                  <div key={itemIndex} className="cart-item">
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                ))}
                <hr />
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ShowHistory;
