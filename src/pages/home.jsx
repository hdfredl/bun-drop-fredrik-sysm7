import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoBlack from "../images/bun-drop-images/logo color.png";
import Favorites from "../components/Favorites";

function home() {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    setIsSpinning(!isSpinning);
  };
  return (
    <>
      <h1>WELCOME THE BEST BUN DROP/SHOP EVER. </h1>

      <h2>We can drop these favorites anywhere, anytime, any buns</h2>
      <Favorites></Favorites>
    </>
  );
}

export default home;
