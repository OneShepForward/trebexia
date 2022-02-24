import React, { useState } from "react";
import './styles/App.css';
import Button from "./Button";
import { useHistory } from "react-router-dom";


function Signup({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errorState, setErrorState] = useState(null)

    let history = useHistory();
  
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
              history.push("/");
            });
          }
          else {
            r.json().then((errors) => {
              setErrorState(errors)
            });
          }
        });
      }
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <input
          type="text"
          id="username"
          placeholder=" Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <input
          type="password"
          id="password"
          placeholder=" Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <input
          type="password"
          id="password_confirmation"
          placeholder=" Confirm Password..."
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br/>
        {errorState ? errorState.error.map(e => <p className="error" key={Math.random()}>{e}</p>) : null}
        <Button type="submit">Signup</Button>
      </form>
    );
}



export default Signup;