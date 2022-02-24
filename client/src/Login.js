import React, { useState } from "react";
import './styles/App.css';
import Button from "./Button";
import { useHistory } from "react-router-dom";


function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorState, setErrorState] = useState(null)

    let history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/login_the_user`, {
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
            r.json().then((user) => {
              onLogin(user);
              setErrorState(null);
              history.push("/");
            });
          }
          else {
            r.json().then((errors) => {
              setErrorState(errors);
            });
          }
        });
      }

  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label id="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label id="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        {errorState ? <p class="error">{errorState.error}</p> : null}
        <Button type="submit">Login</Button>
      </form>
    );
 }



export default Login;