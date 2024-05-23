import React, { useState, useEffect } from "react";
import functionsToReUse from "../universalfunctions/functionsToReUse";

function Menu() {
  const menu = functionsToReUse();
  const [filter, setFilter] = useState(null);

  const filteredMenu = filter
    ? menu.filter((item) => item.category === filter)
    : menu;

  return (
    <>
      <div>
        <button onClick={() => setFilter(null)}>All</button>
        <button onClick={() => setFilter("sides")}>Sides</button>
        <button onClick={() => setFilter("burgers")}>Burgers</button>
        <button onClick={() => setFilter("drinks")}>Drinks</button>
      </div>
      <div className="menu-container">
        {filteredMenu.map((item) => (
          <div key={item.id} className="menu-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} className="img" />
            <br />
            <button>Add to cart</button> <p>Price: ${item.price}</p>
            {/* Skapa en function för att lägg till cart */}
          </div>
        ))}
      </div>
    </>
  );
}
export default Menu;
