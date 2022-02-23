import React from "react";
import Button from "./Button";


function GameOver({ handleEnd, points, gameNum }) {

    function handleGameOver() {
        handleEnd(false);
    }

    function handleScoreSave() {
        console.log("Save score")      
      
          const newScore = { 
              game_id: gameNum,
              score: points
           };
      
          fetch(` /scores`, {
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
            {points > 1 || points < 1 ? <h4>You scored {points} points!</h4> : 
              <h4>You scored 1 point!</h4>}
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