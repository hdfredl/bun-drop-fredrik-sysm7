import React, { useState } from "react";
import functionsToReUse from "../universalfunctions/functionsToReUse";

// FLYTTA TILL HOME senare

function Favorites() {
  const menu = functionsToReUse();
  const filteredMenu = menu.filter((item) => item.stars > 7);

  filteredMenu.sort((low, high) => high.stars - low.stars);

  // Rolla menyn i favoriter..
  const rolleThatMenu = [...filteredMenu, ...filteredMenu];

  return (
    <>
      <div className="menu-container-favorites">
        {rolleThatMenu.map((item, index) => (
          <div key={`${item.id}-${index}`} className="menu-card-favorites">
            <h2>{item.title}</h2>
            {/* <p>{item.description}</p> */}
            <img src={item.image} alt={item.title} className="img" />
            <p>Points scored: {item.stars} / 10</p>
            {/* <p>Price: ${item.price}</p> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Favorites;
