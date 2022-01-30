import React, { useState } from "react";
import './styles/App.css';
import Start from './Start';
import Game from './Game';


function Home({ user, onLogin, onLogout, api_url }) {
    const [start, setStart] = useState(false);
    const [sortBy, setSortBy] = useState("Option 1");

    function handleSort(dropdown) {
        setSortBy(dropdown)
    }

    return (
        <div>
            { start ? <Game handleEnd={setStart} sortBy={sortBy} api_url={api_url}/> : 
            <Start handleStart={setStart} 
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