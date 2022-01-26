import React from 'react';
import './styles/App.css';
import NavBar from './NavBar';




function App() {


    //copied login Hoa created from Phase 3, still need to set up a usercontroller on backend 
    // const [user, setUser] = useState(localStorage.getItem("user"));

    // useEffect(() => {
    //     fetch("http://localhost:4000/me", { credentials: "include" })
    //       .then((r) => r.json())
    //       .then((data) => {
    //         setUser(data.user);
    //         localStorage.setItem("user", data.user);
    //       });
    //   }, []);

  return (

        <div className="quiz">

            <NavBar />

        </div>


  );
}

export default App;
