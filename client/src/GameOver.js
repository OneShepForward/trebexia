import React, { useEffect } from "react";
import Button from "./Button";


function GameOver({ handleEnd, points, gameNum, api_url }) {

    function handleGameOver() {
        // console.log(handleEnd)
        handleEnd(false);
    }

    function handleScoreSave() {
        console.log("Save score")      
      
          const newScore = { 
              game_id: gameNum,
              score: points
           };
      
          fetch(`${api_url}/scores`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newScore),
          })
            .then((r) => r.json())
            .then((newScore) => {
              console.log(newScore);
            });
        }

    return (
        <div>
            <h4>Cheers to you, you trivia guru!</h4>
            <p>Want to go another round?</p>
                <Button 
                    onClick={()=>handleScoreSave()}>
                    Save your score!
                </Button>
                <br/>
                <Button 
                    onClick={()=>handleGameOver()}>
                    <a href="/">Play Again?</a>
                </Button> 
        </div>
    )
}

export default GameOver;