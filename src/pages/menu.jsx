import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import PopAddedModal from "./AddedToTheCartModal";

function menu() {
  return (
    <>
      <Menu>
        <PopAddedModal></PopAddedModal>
      </Menu>
    </>
  );
}

export default menu;
