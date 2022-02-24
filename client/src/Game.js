import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import GameOver from "./GameOver";
import trebexia_logo from './trebexia_logo.png';

function Game ({ handleEnd, sortBy }) {

    const [num, setNum] = useState(1);
    const [points, setPoints] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [isRendered, setRendered] = useState(false);
    const [pointsClass, setPointsClass] = useState("")

    function handleNextQ(pts) {
      if (pts > 0) {
        handleCorrect()
        setPoints(points + pts);
      } else {
        handleIncorrect()
      }
      setNum(num + 1);
    }
    
    function handleCorrect() {
      // This makes the CSS flash the text green after correct reponse
      // It toggles from green to green2 in case of consecutive corrects
      pointsClass === "green" ? setPointsClass("green2") : setPointsClass("green")
    }
    
    function handleIncorrect() {
      // This makes the CSS flash red after incorrect reponse
      // It switches from red to red2 in case of consecutive incorrects
      pointsClass === "red" ? setPointsClass("red2") : setPointsClass("red")
    }

    let gameNum = parseInt(sortBy);

    useEffect(() => {
        fetch(`/game_to_render/${gameNum}`).then((response) => {
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


// -- To prevent coded in load time, comment out this block of code
// !!! But don't forget to comment in the setRendered(true) above!!!
          const timer = setTimeout(() => {
            setRendered(true);
        }, 2000);

        //cleanup function 
        return function cleanup() {
            console.log("Running cleanup");
            // clear the interval so state is no longer updated
            clearInterval(timer);
            };
// -- ^^ To prevent coded in load time, comment out this block of code ^^

      }, [gameNum]);

    function renderQuestions() {
      let questionNumber = 0
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
              <h2 className={`${pointsClass}`}>Points: {points}</h2> 
          </div>
      )
      } else {
        return (
          <GameOver 
            handleEnd={handleEnd}
            points = {points}
            gameNum = {gameNum}
          />
        )
      }
    } else {
      return (<img src={trebexia_logo} alt="logo" className="App-logo"/>)
    }




}

export default Game;