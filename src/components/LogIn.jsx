import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";

function LogIn({ setUser }) {
  const nameInput = useInput("name");
  const emailInput = useInput("email");
  const passwordInput = useInput("password");

  // skap en toggle för Modal
  const [isModalVisible, signUpModalDisplay] = useState(false);

  // om toggled = display, annars not
  const toggleSignUpModal = () => {
    signUpModalDisplay(!isModalVisible);
  };

  const closeSignUpModal = () => {
    signUpModalDisplay(false);
  };

  function registerNewUser() {
    // Refaktorerea kanske senare.. med fetch/fetcher =>
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameInput.inputValue,
        email: emailInput.inputValue,
        password: passwordInput.inputValue,
        favorites: [],
        orders: [],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New user has been registered:", data);
      });
  }

  function LoggingIn() {
    // Sign in user
    // Refaktorerea kanske senare.. med fetch/fetcher =>
    fetch("http://localhost:3000/users")
      .then((response) => response.json()) // user.name == nameInput & Password
      .then((users) => {
        const user = users.find(
          (user) =>
            user.name === nameInput.inputValue &&
            user.password === passwordInput.inputValue
        );

        if (user) {
          console.log("user logged in ", user);
          setUser(user);
        } else {
          console.log("wrong user");
        }
      });
  }

  return (
    <>
      <div>
        <h3>Not registered yet?</h3>
        <button onClick={toggleSignUpModal}>Sign up</button>
        <br />

        {isSignUpModalVisible && (
          <div>
            <div className="modal-for-SignUp">
              <button className="modal-close" onClick={closeSignUpModal}>
                &times;
              </button>
              <p>Enter your desired username:</p>
              <input
                className="round-the-box"
                type="text"
                placeholder="Name"
                value={nameInput.inputValue}
                onChange={nameInput.handleInput}
              />
              <p>{nameInput.error}</p>
              <p>Enter your Email address</p>
              <input
                className="round-the-box"
                type="text"
                placeholder="Email"
                value={emailInput.inputValue}
                onChange={emailInput.handleInput}
              />
              <p>{emailInput.emailError}</p>
              <p>{emailInput.error}</p>
              <p>Enter your password</p>
              <input
                className="round-the-box"
                type="password"
                placeholder="Password"
                value={passwordInput.inputValue}
                onChange={passwordInput.handleInput}
              />
              <p>{passwordInput.error}</p>
              <br />
              <button onClick={registerNewUser}>Register</button>
            </div>
          </div>
        )}
        <br />
        <br />
        <h3>Sign in</h3>
        <div className="sign-in">
          <input
            className="round-the-box"
            type="text"
            placeholder="Username"
            value={nameInput.inputValue}
            onChange={nameInput.handleInput}
          />{" "}
          <br />
          <br />
          <input
            className="round-the-box"
            type="password"
            placeholder="Password"
            value={passwordInput.inputValue}
            onChange={passwordInput.handleInput}
          />
          <br />
          <br />
          <button onClick={LoggingIn}>
            <Link to="/">Log in</Link>
          </button>{" "}
          <br />
          <br />
        </div>

        {/* <h1>
          Name: {nameInput.inputValue} Email: {emailInput.inputValue}
        </h1> */}
      </div>
    </>
  );
}

export default LogIn;
