import { useState } from "react";

function useInput(type) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  function handleInput(e) {
    const { value } = e.target;

    setInputValue(value);

    if (type === "email") {
      if (!value.includes("@")) {
        setError("Need to have a @");
      } else if (value.length < 3) {
        setError("Need to be at least 3 characters");
      } else {
        setError("");
      }
    } else if (type === "password") {
      if (value.length < 6) {
        setError("Your password needs to be at least 6 characters");
      } else {
        setError("");
      }
    } else if (type === "name") {
      if (value.length < 3) {
        setError("Need to be at least 3 characters");
      } else {
        setError("");
      }
    }
  }

  return {
    inputValue,
    error,
    handleInput,
  };
}

export default useInput;
