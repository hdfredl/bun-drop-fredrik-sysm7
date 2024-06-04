import React, { useState } from "react";
import functionsToReUse from "../universalfunctions/functionsToReUse";

function Menu({ buyFood, user, updateUserFavorites }) {
  const menu = functionsToReUse(); // hämta in db
  const [filter, setFilter] = useState(null);
  const [searchBar, setSearchBar] = useState("");
  const [messages, setMessages] = useState({});

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

  const handleAddToCart = (item, itemId) => {
    console.log(buyFood);
    buyFood(item);
    console.log("Ordered!", item, itemId);
    displayaTempMessage(`This yummy thing has been added to your cart`, itemId);
  };

  // Favorites till user
  const handleTheUsersAddToFavorites = (item, itemId) => {
    if (user) {
      // Om ej null, uppdatera user, favorites(objektet), item (food)
      const updatedFavorites = [...user.favorites, item];
      updateUserFavorites(updatedFavorites);
      console.log("Adding to Favorite", item, itemId);
      displayaTempMessage(`Added to favorites`, itemId);
    } else {
      console.log("log in to add favorites.");
    }
  };

  const displayaTempMessage = (msg, itemId) => {
    // lägg message till vald id
    setMessages((display2sekMess) => ({
      ...display2sekMess,
      [itemId]: msg,
    }));

    // ta bort efter 2 sek
    setTimeout(() => {
      setMessages((display2sekMess) => ({
        ...display2sekMess,
        [itemId]: null,
      }));
    }, 2000);
  };

  return (
    <>
      <div>
        <button onClick={() => setFilter(null)}>All</button>
        <button onClick={() => setFilter("sides")}>Sides</button>
        <button onClick={() => setFilter("burgers")}>Burgers</button>
        <button onClick={() => setFilter("drinks")}>Drinks</button>
        <input
          className="round-the-box"
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
            {/* Displaya meddelande */}
            {messages[item.id] && (
              <p className="message">{messages[item.id]}</p>
            )}
            <button onClick={() => handleAddToCart(item, item.id)}>
              Add to cart
            </button>
            <p>Price: ${item.price}</p>

            {/* Bara om man är inloggad funkar denna knapp */}
            {user && (
              <button
                onClick={() => handleTheUsersAddToFavorites(item, item.id)}
              >
                Add to Favorites
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
export default Menu;
