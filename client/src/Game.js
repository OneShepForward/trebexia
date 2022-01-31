import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import GameOver from "./GameOver";

// import Button from "./Button";



function Game ({ api_url, handleEnd, sortBy }) {

    const [num, setNum] = useState(1);
    const [points, setPoints] = useState(0);
    const [questions, setQuestions] = useState([]);
    // const [questionNumber, setQuestionNumber] = useState(0);

    function handleNextQ(pts) {
      setPoints(points + pts);
      setNum(num + 1);
    }

    let gameNum = parseInt(sortBy);
    console.log("gameNum :", gameNum)
    //we should be able to change fetch link to game_to_render/${gameNum} but not working for me

    useEffect(() => {
        fetch(`${api_url}/game_to_render/${gameNum}`).then((response) => {
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
      let questionNumber = 0
        // console.log("renderQuestion hit", questions)
        return Object.values(questions).map(q => {
          questionNumber += 1
          return <div className="question" key={q.id}>
              <QuestionCard 
                key={q.id} 
                q={q}
                num={num}
                handleNextQ={handleNextQ}
                qNum = {questionNumber}
              />
          </div>
          }
        )
    }
    if (num <= 7) {
      return (
        <div className="question">
            <h2>Question {num} of 7</h2> 
            {renderQuestions()}
            <h2>Points: {points}</h2> 
        </div>
    )
    } else {
      return (
        <GameOver 
          handleEnd={handleEnd}
          points = {points}
          gameNum = {gameNum}
          api_url = {api_url}
        />
      )
    }




}

export default Game;