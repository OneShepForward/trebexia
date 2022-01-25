import React from "react";
import "./styles/NavBar.css";

function NavBar() {
return (
    <div>
        <header class="header">
		    <h1 class="logo"><a href="#">Trebexia Trivia</a></h1>
                <ul class="main-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Scores</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
	    </header> 
    </div>

)
}

export default NavBar;