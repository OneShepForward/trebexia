import React, { useState } from "react";
import './styles/App.css';
import Start from './Start';
import Game from './Game';


function Home({ user, onLogin, onLogout, api_url }) {
    const [start, setStart] = useState(false);


    return (
        <div>
            { start ? <Game handleEnd={setStart} api_url={api_url}/> : 
            <Start handleStart={setStart} 
                user={user} 
                onLogin={onLogin} 
                onLogout={onLogout}
            />} 
        </div>
    )
}

export default Home;