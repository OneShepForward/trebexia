import React, { useState, useEffect } from "react";
import './styles/App.css';
import ScoreCard from "./ScoreCard";

function Scores() {
    const [scores, setScores] = useState([])

    useEffect(() => {
        fetch("https://morganick.herokuapp.com/scores").then((response) => {
          if (response.ok) {
            response.json().then((scores) => {
              console.log(scores)
                setScores(scores)
            });
          } else {
            response.json().then((error) => console.log(error))
          }
        });
      }, []);

    function renderScores() {
        // console.log("renderQuestion hit", scores)
        return (
        <ol>
          {scores.map(s => <li>{s.user.username} - {s.score}</li>)}
        </ol>
        )}
      

    return (
      <div className = "scores-list">
        <h2>Top Scores</h2>
          {renderScores()}
      </div>
    )
}

export default Scores;