import React from "react";

import { useState } from "react";

function useInput() {
  const [inputValue, setInputValue] = useState("");

  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
    if (
      e.target.placeholder.includes("Email") &&
      !e.target.value.includes("@")
    ) {
      console.log("Need to have a @");
      setEmailError("Need to have a @");
    } else {
      setEmailError("");
    }
    if (inputValue.length < 3) {
      console.log("At least 3 letters");
      setError("Need to be atleast 3 characters");
    } else {
      setError("");
    }
  }

  return {
    inputValue,
    error,
    emailError,
    handleInput,
  };
}

export default useInput;
