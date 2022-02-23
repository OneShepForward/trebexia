import React, { useState } from "react";
import './styles/App.css';
import Start from './Start';
import Game from './Game';


function Home({ user, onLogin, onLogout, api_url }) {
    const [start, setStart] = useState(false);
    const [sortBy, setSortBy] = useState("1");

    
    function handleSort(dropdown) {
        // This sets the dropdown state to the selected game_id
        setSortBy(dropdown)
    }

    return (
        <div>
            { start ? 
            <Game 
                handleEnd={setStart} 
                sortBy={sortBy} 
                api_url={api_url}
            /> 
            : 
            <Start 
                handleStart={setStart} 
                user={user} 
                onLogin={onLogin} 
                onLogout={onLogout}
                sortBy={sortBy} 
                handleSort={handleSort}
            />} 
        </div>
    )
}

export default Home;