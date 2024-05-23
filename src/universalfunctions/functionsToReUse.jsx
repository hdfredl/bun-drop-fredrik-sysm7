import React, { useState, useEffect } from "react";
import Fetcher from "../universalfunctions/Fetcher";
import useFetcher from "../universalfunctions/Fetcher";

function fetching() {
  const menu = useFetcher(); // återanvänd userFetcher (fetch metod.)

  return menu;
}

export default fetching;
