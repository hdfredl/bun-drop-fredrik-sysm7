import React, { useState, useEffect } from "react";

function useFetcher() {
  const [menu, setMenus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((response) => response.json())
      .then((data) => {
        console.log("Loading Menu");
        setMenus(data);
      });
  }, []);

  return menu;
}

export default useFetcher;
