import React from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";

function LogIn() {
  const nameInput = useInput();
  const emailInput = useInput();

  return (
    <>
      <div>Login Page</div>

      <div>
        <h1>Not registered yet? </h1>
        <h1>Sign up</h1>
        <input
          type="text"
          placeholder="Name"
          value={nameInput.inputValue}
          onChange={nameInput.handleInput}
        />
        <p>{nameInput.error}</p>
        <input
          type="text"
          placeholder="Email"
          value={emailInput.inputValue}
          onChange={emailInput.handleInput}
        />
        <p>{emailInput.emailError} </p>
        <p>{emailInput.error}</p>

        <Link to="/">Back to home</Link>

        {/* <h1>
          Name: {nameInput.inputValue} Email: {emailInput.inputValue}
        </h1> */}
      </div>
    </>
  );
}

export default LogIn;
