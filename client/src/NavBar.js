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

function NavBar({ user, onLogin, onLogout, api_url }) {
console.log(user)

function handleLogout(e) {
    fetch(`${api_url}/logout`, {
        method: "DELETE",
      }).then(() => onLogout());
}


    return (

    <div>
        <header class="header">
        <nav>
            <Link to="/">
                <h1 class="logo"><a href="/">Trebexia Trivia</a></h1>
                {user ? <h2 class="welcome">Welcome, {user.username}!</h2> : <h4>Please sign up or sign in</h4>}
            </Link> 


            <ul class="main-nav">
            <Link to="/">Home</Link>
            <Link to="/scores">Scores</Link>
            {/* Displays Login and Sign up if there is not active user and Logout if there is */}
            {user ? <></> : <Link to="/login">Login</Link> }
            {user ? <a onClick={(e)=>handleLogout(e)}>Log out</a> : <Link to="/signup">Sign Up</Link> }            
            </ul>
        </nav>        
        </header> 


        <Switch>
            <Route path="/login">
                <Login 
                api_url = {api_url}
                user={user} 
                onLogin={onLogin} 
                onLogout={onLogout}
                />
            </Route>

            <Route path="/scores">
                <Scores
                api_url = {api_url}
                />
            </Route>

            <Route path="/signup">
                <Signup 
                api_url = {api_url}
                user={user} 
                onLogin={onLogin} 
                onLogout={onLogout}
                />
            </Route>

            <Route path="/">
                <Home
                api_url = {api_url}
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