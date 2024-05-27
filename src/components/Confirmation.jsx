import React, { useEffect, useState } from "react";

function Confirmation({ show, onClose }) {
  const [deliveryTime, setDeliveryTime] = useState(0);

  // göär Random senare... funkar än så länge..
  useEffect(() => {
    if (show) {
      const randomTime = Math.floor(Math.random() * (90 - 10 + 1)) + 10;
      setDeliveryTime(randomTime);
    }
  }, [show]);

  const handleClickOutside = (e) => {
    if (e.target.className === "modal-poppingup") {
      onClose();
    }
  };

  // Flyttat ner if under hooks, blev errors. rules of hooks
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal-poppingup" onClick={handleClickOutside}>
        <div className="modal">
          <p>
            Your order is being processed. We expect it to be cooked within 10
            minutes and delivered within {deliveryTime} minutes.
          </p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
