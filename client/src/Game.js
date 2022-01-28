import React, { useState, useEffect } from "react";
import Button from "./Button";
import QuestionCard from "./QuestionCard";


function Game () {

    const [num, setNum] = useState(1);
    const [points, setPoints] = useState(0);
    const [questions, setQuestions] = useState([]);




    useEffect(() => {
        fetch("https://morganick.herokuapp.com/game_to_render/1").then((response) => {
          if (response.ok) {
            response.json().then((question_array) => {
              console.log("Game fetched: ", question_array)
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
          <div className="question" key={q.id}>
            <QuestionCard 
            key={q.id} 
            q={q}
            />
          </div>
        )
    }
    
return (
    <div className="question">
        <h2>Question {num} of 7</h2>
        {renderQuestions()}
        <h2>Points: {points}</h2>
    </div>
)
}

export default Game;