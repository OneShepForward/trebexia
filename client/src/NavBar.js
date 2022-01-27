import React from "react";
import "./styles/NavBar.css";
import Login from "./Login";
import Scores from "./Scores";
import Signup from "./Signup";
import Home from './Home';


import {
    Switch,
    Route,
    Link,
} from "react-router-dom";

function NavBar({ user, onLogin, onLogout }) {
console.log(user)


    return (

    <div>
        <header class="header">
        <nav>
            <Link to="/">
                <h1 class="logo"><a href="/">Trebexia Trivia</a></h1>
                {user ? <h2 class="welcome">Welcome, {user.username}!</h2> : <h2>Please sign in</h2>}
            </Link> 


            <ul class="main-nav">
            <Link to="/">Home</Link>
            <Link to="/scores">Scores</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            </ul>
        </nav>        
        </header> 


        <Switch>
            <Route path="/login">
                <Login 
                user={user} 
                onLogin={onLogin} 
                onLogout={onLogout}
                />
            </Route>

            <Route path="/scores">
                <Scores />
            </Route>

            <Route path="/signup">
                <Signup 
                user={user} 
                onLogin={onLogin} 
                onLogout={onLogout}
                />
            </Route>

            <Route path="/">
                <Home
                 user={user}
                 onLogin={onLogin} 
                 onLogout={onLogout}
                />
            </Route>


        </Switch>

    </div>

)
}

export default NavBar;