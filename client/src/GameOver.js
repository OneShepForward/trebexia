import React, { useEffect } from "react";
import Button from "./Button";


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
            {/* I got the play again buttton to link back to home but it does not keep the user logged in */}
                <Button onClick={()=>handleGameOver()}>
                <a href="/">
                Play Again</a>
                </Button> 
        </div>
    )
}

export default GameOver;