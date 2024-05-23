import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoBlack from "../images/bun-drop-images/logo color.png";
import Home from "../components/Home";

function home() {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    setIsSpinning(!isSpinning);
  };
  return (
    <>
      <h1>WELCOME THE BEST BUN DROP/SHOP EVER. </h1>
      <img
        src={logoBlack}
        alt="logo-black"
        className={isSpinning ? "img-home spin" : "img-home"}
        onClick={handleSpin}
      />
      <h2>We can drop this anywhere, anytime, any buns</h2>
    </>
  );
}

export default home;
