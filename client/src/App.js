import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

import './styles/App.css';
import './styles/HARLOWSI_1.woff';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/me`).then((response) => 
    {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
        });
      } 
    }
    );
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
            onLogout={handleLogout}
          />
        </div>


  );
}

export default App;
