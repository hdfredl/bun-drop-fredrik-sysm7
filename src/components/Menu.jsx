import React, { useState } from "react";
import functionsToReUse from "../universalfunctions/functionsToReUse";

function Menu({ buyFood }) {
  const menu = functionsToReUse(); // hämta in db
  const [filter, setFilter] = useState(null);
  const [searchBar, setSearchBar] = useState("");

  // skapa en modal

  const filteredMenu = menu.filter((item) => {
    if (filter && item.category !== filter) {
      // om det inte stämmer överens mellan filt & category
      return false;
    }

    // Skapa searchbar för dynamiskt sökning
    if (
      searchBar &&
      !item.title.toLowerCase().includes(searchBar.toLowerCase())
    ) {
      return false;
    } else {
      return true;
    }
  });

  const handleAddToCart = (item) => {
    console.log(buyFood);
    buyFood(item);
    console.log("Ordered!", item);
  };

  return (
    <>
      <div>
        <button onClick={() => setFilter(null)}>All</button>
        <button onClick={() => setFilter("sides")}>Sides</button>
        <button onClick={() => setFilter("burgers")}>Burgers</button>
        <button onClick={() => setFilter("drinks")}>Drinks</button>
        <input
          type="text"
          placeholder="Search..."
          value={searchBar}
          onChange={(e) => setSearchBar(e.target.value)}
        />
      </div>
      <div></div>
      <div className="menu-container">
        {filteredMenu.map((item) => (
          <div key={item.id} className="menu-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} className="img" />
            <br />
            <button onClick={() => handleAddToCart(item)}>Add to cart</button>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Menu;
