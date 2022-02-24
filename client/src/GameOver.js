import React, { useState } from "react";
import Button from "./Button";


function GameOver({ handleEnd, points, gameNum }) {

  const [saveSuccess, setSaveSuccess] = useState(false)
  const [saveFailure, setSaveFailure] = useState(false)

    function handleGameOver() {
        handleEnd(false);
    }

    function handleScoreSave() {
      
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
          }).then((r) => {
            if (r.ok) {
              r.json().then(() => {
                setSaveSuccess(true)
              });
            } else {
              r.json().then(() => {
                setSaveFailure(true)
              })
            }
          })
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
                {saveSuccess ? <h4 className="green">Score saved!</h4> : <></>}
                {saveFailure ? <h4 className="red">You must be logged in to save.</h4> : <></>}
                <Button 
                    onClick={()=>handleGameOver()}>
                    <a href="/">Play Again?</a>
                </Button> 
        </div>
    )
}

export default GameOver;