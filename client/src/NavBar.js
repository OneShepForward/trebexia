import React from "react";
import "./styles/NavBar.css";
import Login from "./Login";
import Scores from "./Scores";
import Signup from "./Signup";
import Home from "./Home";
import trebexia_header from "./trebexia_header.png";

import { Switch, Route, Link } from "react-router-dom";



function NavBar({ user, onLogin, onLogout }) {
  function handleLogout(e) {
    fetch(`/logout`, {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div>
      <header className="header">
        <nav>
          <Link to="/">
            {/* <h1 className="logo">Trebexia Trivia</h1> */}
            <img src={trebexia_header} alt="Trebexia Trivia" className="logo" />
          </Link>
          <Link to="/">
            {user ? (
              <h4 className="welcome">Welcome, {user.username}!</h4>
            ) : (
              <h4>Please sign up or sign in</h4>
            )}
          </Link>

          <ul className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/high_scores">Scores</Link>
            {/* Displays Login and Sign up if there is not active user and Logout if there is */}
            {user ? <></> : <Link to="/login">Login</Link>}
            {user ? (
              <Link to="/" onClick={(e) => handleLogout(e)}>
                Log out
              </Link>
            ) : (
              <Link to="/signup">Sign Up</Link>
            )}
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path="/login">
          <Login user={user} onLogin={onLogin} />
        </Route>

        <Route path="/high_scores">
          <Scores />
        </Route>

        <Route path="/signup">
          <Signup user={user} onLogin={onLogin} />
        </Route>

        <Route exact path="/">
          <Home user={user} onLogin={onLogin} />
        </Route>
      </Switch>
    </div>
  );
}

export default NavBar;
