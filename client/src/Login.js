import React, { useState } from "react";
import './styles/App.css';
import Button from "./Button";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
  
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          }
        });
      }
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <Button type="submit">Create Login</Button>
      </form>
    );
 }



export default Login;