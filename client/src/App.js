import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="App">
      <NavBar user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <Footer />
    </div>
  );
}

export default App;
