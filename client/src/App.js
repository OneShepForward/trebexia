import React, { useState, useEffect } from 'react';
import './styles/App.css';
import NavBar from './NavBar';




function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
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
          
          <NavBar  
            user={user} 
            onLogin={handleLogin} 
            onLogout={handleLogout}/>

        </div>


  );
}

export default App;
