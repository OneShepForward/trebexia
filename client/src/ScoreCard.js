import React from "react";

function ScoreCard ({ score }) {

    console.log("Score card has: ", score)
    
    return (                
        <div>
            <p>Player: </p>
            <p>Score: {score}</p>
        </div> 
    )
}


export default ScoreCard;