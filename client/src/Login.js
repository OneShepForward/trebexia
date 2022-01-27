import React, { useState } from "react";
import './styles/App.css';
import Button from "./Button";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    // When submitting the login using onLogin, I kept getting error:
    // Login.js:29 Uncaught (in promise) TypeError: onLogin is not a function
    // at Login.js:29:1. Made this to debug.

    function testFunc(variable) {
      // console.log(variable)
      onLogin(variable)
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/login_the_user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            username,
            password,
         }),
        }).then((r) => {
          if (r.ok) {
            // r.json().then((user) => onLogin(user));
            r.json().then((user) => testFunc(user));
          }
          else {
            r.json().then((errors) => console.log(errors));
          }
        });
      }

      console.log("username:", username, "password:", password)
      // console.log("username:", username)
  
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
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <Button type="submit">Login</Button>
      </form>
    );
 }



export default Login;