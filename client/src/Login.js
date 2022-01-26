import React, { useState } from "react";
import './styles/App.css';
import Button from "./Button";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    // const configObject =     
    // {
    //         "username": "Shep2",
    //         "password_digest": "123"
    // }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        //   body: JSON.stringify({ username, password }),
          body: JSON.stringify({ username }),
        }).then((r) => {
          if (r.ok) {
            // r.json().then((user) => onLogin(user));
            r.json().then((user) => console.log(user));
          }
        });
      }

    //   console.log("username:", username, "password:", password)
      console.log("username:", username)
  
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
        <br/>
        {/* <label htmlFor="password">Password: </label>
        <input
          type="text"
          id="password_digest"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br> */}
        <Button type="submit">Create Login</Button>
      </form>
    );
 }



export default Login;