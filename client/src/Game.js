import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import GameOver from "./GameOver";
import trebexia_logo from './trebexia_logo.png';

// import Button from "./Button";



function Game ({ api_url, handleEnd, sortBy }) {

    const [num, setNum] = useState(1);
    const [points, setPoints] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [isRendered, setRendered] = useState(false);
    const [isGreen, setGreen] = useState("")

    function handleNextQ(pts) {
      if (pts > 0) {
      setPoints(points + pts);
      handleCorrect()
    }
      setNum(num + 1);
    }

    function handleCorrect() {
      // It switches from green to green2 so state doesn't have to rerender when green flash is over
      isGreen === "green" ? setGreen("green2") : setGreen("green")
    }

    let gameNum = parseInt(sortBy);

    useEffect(() => {
        fetch(`${api_url}/game_to_render/${gameNum}`).then((response) => {
          if (response.ok) {
            response.json().then((question_array) => {
                setQuestions(question_array)

                // setRendered here when deploying and comment out from 
                // const timer to clearInterval

                // setRendered(true)
            });
          } else {
            response.json().then((error) => console.log(error))
          }
        });

          // Use this code to simulate loading time
          const timer = setTimeout(() => {
            setRendered(true);
        }, 2000);

        //cleanup function 
        return function cleanup() {
            console.log("Running cleanup");
            // ✅ clear the interval so state is no longer updated
            clearInterval(timer);
            };

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
    if (isRendered) {
      if (num <= 7) {
        return (
          <div className="question">
              <h2>Question {num} of 7</h2> 
              {renderQuestions()}
              <h2 className={`${isGreen}`}>Points: {points}</h2> 
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
    } else {
      return (<img src={trebexia_logo} alt="logo" className="App-logo"/>)
    }




}

export default Game;