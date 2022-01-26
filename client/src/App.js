import React, { useState } from 'react';
import './styles/App.css';
import Start from './Start';
import Game from './Game';
import NavBar from './NavBar';

// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
 
  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      <NavBar />
      { start ? <Game /> : <Start props={setStart} />} 
    </div>
  );
}

export default App;
