import React, { useEffect, useState } from "react";
import ShowHistory from "./ShowHistory";

function UsersFavoritesList({ user, setUser }) {
  const [showModal, setShowModal] = useState(false);

  // hämta specifik user
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/users/${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        });
    }
  }, [user, setUser]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Om ej inloggad
  if (!user) {
    return <p>Register or Log in to see your favorites.</p>;
  }

  return (
    <>
      <div>
        {/* Gör modal för deras tidigare orders, toggle funktion */}
        <button onClick={toggleModal}>Show Order History</button>
        {showModal && (
          //displaya userns orders objekt
          <ShowHistory orders={user.orders} onClose={toggleModal} />
        )}
      </div>
      <div>
        <h2>Your Favorites</h2>
        <div className="favorites-container">
          {/* Om user har fler än 1 */}
          {user.favorites.length > 0 ? (
            user.favorites.map((item) => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img src={item.image} alt={item.title} className="img" />
                <p>Price: ${item.price}</p>
              </div>
            ))
          ) : (
            // Annars inget
            <p>You have no favorite items.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default UsersFavoritesList;
