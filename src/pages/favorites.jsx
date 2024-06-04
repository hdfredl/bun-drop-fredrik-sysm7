import React from "react";
import { Link } from "react-router-dom";
import Favorites from "../components/Favorites";
import UsersFavoritesList from "../components/UsersFavorites";

function favorites({ user, setUser }) {
  return (
    <>
      <UsersFavoritesList user={user} setUser={setUser} />
    </>
  );
}

export default favorites;
