import React, { useState } from "react";
import './styles/App.css';
import Button from "./Button";

function Signup({ onLogin, api_url }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errorState, setErrorState] = useState(null)

  
    function handleSubmit(e) {
        e.preventDefault();
        // users/create route
        fetch(`/users`, {
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
            r.json().then((user) => {
              onLogin(user)
              setErrorState(null);
            });
          }
          else {
            r.json().then((errors) => {
              console.log(errors)
              setErrorState(errors)
            });
          }
        });
      }
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
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
        <br></br>
        <label id="password_confirmation">Confirm Password: </label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br/>
        {errorState ? errorState.error.map(e => <p class="error">{e}</p>) : null}
        <Button type="submit" class="test123">Signup</Button>
      </form>
    );
}



export default Signup;