import React from "react";

function Confirmation({ show, onClose }) {
  if (!show) {
    return null;
  }

  const handleClickOutside = (e) => {
    if (e.target.className === "modal-poppingup") {
      onClose();
    }
  };

  // göär Random senare... funkar än så länge..

  return (
    <>
      <div>Confirmation Page</div>
      <div className="modal-poppingup" onClick={handleClickOutside}>
        <div className="modal">
          <p>
            Your order is being processed. We expect it to be cooked within 10
            minutes and delivered within 30 minutes. // Gör en Random senare
          </p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
