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
              console.log("Scores:", data)
              setScores(data)
            });
          } else {
            response.json().then((error) => console.log(error))
          }
        });
      }, []);

    function renderScores() {
        return scores.map((score)=> (
            <p>Score: {score.score}, Player: {score.user.username}</p>
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