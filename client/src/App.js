import React, { useState, useEffect } from 'react';
import './styles/App.css';
import NavBar from './NavBar';


function App() {
  const [user, setUser] = useState(null);

  // comment in the api_url that you're using
  // const api_url = "http://127.0.0.1:3000"
  const api_url = "https://morganick.herokuapp.com" 


  // THIS WOULD BE TO HAVE USER INFO SAVED IN SESSION
  useEffect(() => {
    // Does this need to just be "/me" for the fetch? Hmmm....
    fetch(`${api_url}/me`).then((response) => 
    // console.log(response)
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
    setUser(user);
    // console.log(user)
  }

  function handleLogout() {
    setUser(null);
  }


  return (

        <div className="App">
          
          <NavBar  
            user={user} 
            onLogin={handleLogin} 
            api_url = {api_url} 
            onLogout={handleLogout}
          />

        </div>


  );
}

export default App;
