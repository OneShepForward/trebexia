import React, { useState, useEffect } from "react";
import './styles/App.css';
import ScoreCard from "./ScoreCard";

function Scores() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:3000/game_to_render/1").then((response) => {
          if (response.ok) {
            response.json().then((question_array) => {
            //   console.log(question_array)
                setQuestions(question_array)
            });
          } else {
            response.json().then((error) => console.log(error))
          }
        });
      }, []);

    function renderQuestions() {
        // console.log("renderQuestion hit", questions)
        return Object.values(questions).map(q => 
            <p>{q.question}</p>)
    }
      

    return (
        <div>
            {renderQuestions()}
            <h2>Scores</h2>
            {renderScores()}
        </div>
    )
}

export default Scores;