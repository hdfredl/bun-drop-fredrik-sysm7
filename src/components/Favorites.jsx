import React from "react";
import functionsToReUse from "../universalfunctions/functionsToReUse";

function Favorites() {
  const menu = functionsToReUse();
  const filteredMenu = menu.filter((item) => item.stars > 7);

  filteredMenu.sort((low, high) => high.stars - low.stars);
  return (
    <>
      <div className="menu-container-favorites">
        {filteredMenu.map((item) => (
          <div key={item.id} className="menu-card-favorites">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Points scored: {item.stars} / 10</p>
            <img src={item.image} alt={item.title} className="img" />
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Favorites;
