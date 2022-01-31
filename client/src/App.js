import React, { useState, useEffect } from 'react';
import './styles/App.css';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  const [user, setUser] = useState(null);

  // comment in the api_url that you're using
  // const api_url = "http://127.0.0.1:3000"
  // const api_url = "https://morganick.herokuapp.com" 

  // to change proxy endpoint for fetch urls, change the
  // "proxy": "http://127.0.0.1:3000", in the package.json file


  useEffect(() => {
    fetch(`/me`).then((response) => 
    {
      if (response.ok) {
        response.json().then((user) => {
          console.log("/me says the user is:", user)
          setUser(user)
        });
      } else {
        response.json().then((error) => {
          // debugger
          console.log("/me response is not ok: ", error)
        })
      }
    }
    );
  }, []);

  function handleLogin(user) {
    console.log("sign up ", user)
    setUser(user);
    // window.location.assign(`https://morganick.herokuapp.com`)
  }

  function handleLogout() {
    setUser(null);
  }

  return (

        <div className="App">
          <NavBar  
            user={user} 
            onLogin={handleLogin} 
            // api_url = {api_url} 
            onLogout={handleLogout}
          />
        </div>


  );
}

export default App;
