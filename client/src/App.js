import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Scores from "./Scores";
import Signup from "./Signup";
import Footer from "./Footer";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/me`).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
    if (user) {
      return <Home user={user} />;
    } else {
      return <Login onLogin={setUser} user={user} />;
    }
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <BrowserRouter className="App">
      <NavBar user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <Switch>
        <Route path="/login">
          <Login user={user} onLogin={handleLogin} />
        </Route>

        <Route path="/high_scores">
          <Scores />
        </Route>

        <Route path="/signup">
          <Signup user={user} onLogin={handleLogin} />
        </Route>
        <Route exact path="/">
          <Home user={user} onLogin={handleLogin} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
