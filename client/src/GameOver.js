import React, { useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";


function GameOver({ handleEnd }) {

    function handleGameOver() {
        console.log(handleEnd)
        // handleEnd(false);
    }

    // useEffect(() => {
    //     fetch("https://morganick.herokuapp.com/scores").then((response) => {
    //       if (response.ok) {
    //         response.json().then((scores) => {
    //           console.log(scores)
    //             setScores(scores)
    //         });
    //       } else {
    //         response.json().then((error) => console.log(error))
    //       }
    //     });
    //   }, []);

    return (
        <div>
            <h4>Cheers to you, you trivia guru!</h4>
            <p>Want to go another round?</p>
            <Button onClick={handleGameOver()}>Play Again</Button> 


        </div>
    )
}

export default GameOver;