import React, { useState } from "react";
import './styles/App.css';
import Button from "./Button";

function Signup({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
        e.preventDefault();
        // users/create route
        fetch("https://morganick.herokuapp.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              username,
              password,
              password_confirmation: passwordConfirmation,          
          }),
        }).then((r) => {
          if (r.ok) {
            // r.json().then((user) => onLogin(user));
            r.json().then((user) => console.log(user));
          }
        });
      }

    //   console.log("username:", username, "password:", password)
      console.log("username:", username, "password:", password, "conf:", passwordConfirmation)
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <label htmlFor="password_confirmation">Confirm Password: </label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br></br>
        <Button type="submit">Signup</Button>
      </form>
    );
 }



export default Signup;