import React, { useState } from "react";
import "./styles/App.css";
import Start from "./Start";
import Game from "./Game";

function Home({ user, onLogin, onLogout }) {
  const [start, setStart] = useState(false);
  const [sortBy, setSortBy] = useState("1");

  function handleSort(dropdown) {
    // This sets the dropdown state to the selected game_id
    setSortBy(dropdown);
  }

  return (
    <div>
      {user ? (
        <h4 className="welcome">Welcome, {user.username}!</h4>
      ) : (
        <h4>
          <a className="white-link" href="/login">Sign up</a> or <a className="white-link" href="/login">sign in</a> to save
          your scores
        </h4>
      )}

      {start ? (
        <Game handleEnd={setStart} sortBy={sortBy} />
      ) : (
        <Start
          handleStart={setStart}
          user={user}
          onLogin={onLogin}
          onLogout={onLogout}
          sortBy={sortBy}
          handleSort={handleSort}
        />
      )}
    </div>
  );
}

export default Home;
