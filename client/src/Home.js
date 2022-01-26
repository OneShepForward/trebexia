import React, { useState } from "react";
import './styles/App.css';
import Start from './Start';
import Game from './Game';


function Home() {
    const [start, setStart] = useState(false);

    return (
        <div>
            { start ? <Game /> : <Start props={setStart} />} 
        </div>
    )
}

export default Home;