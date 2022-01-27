import React, { useEffect, useState } from "react";
import './styles/App.css';
import ScoreCard from "./ScoreCard";

function Scores() {
    const [scores, setScores] = useState([]);
    console.log(scores)


    
    useEffect(() => {
        fetch("http://127.0.0.1:3000/scores/1").then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              console.log(data)
            });
          } else {
            response.json().then((error) => console.log(error))
          }
        });
      }, []);

    function renderScores() {
        return scores.map((score)=> (

            <ScoreCard 
                key={score.id}
                score={score}
            />
        ));
     }


    return (
        <div>
            <h2>Scores</h2>
            {renderScores()}
        </div>
    )
}

export default Scores;