import React, { useState, useEffect } from "react";
import Button from "./Button";


function Game () {

    const [num, setNum] = useState(1);
    const [points, setPoints] = useState(0);

    useEffect(() => {
      fetch("http://127.0.0.1:3000/game_to_render/1").then((response) => {
        if (response.ok) {
          response.json().then((user) => {
            console.log("success", user)
          });
        } else {
          response.json().then((error) => console.log(error))
        }
      });
    }, []);

    
return (
    <div className="question">
        <h2>Question {num} of 7</h2>
        <h4>Insert Question</h4>
        
        <Button >Option 1</Button>
        <br/>
        <Button >Option 2</Button>
        <br/>
        <Button >Option 3</Button>
        <br/>
        <Button >Option 4</Button>
        <br/>
        <h2>Points: {points}</h2>
    </div>
)
}

export default Game;