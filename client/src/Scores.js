import React, { useState, useEffect } from "react";
import './styles/App.css';
import trebexia_logo from './trebexia_logo.png';

function Scores() {
    const [scores, setScores] = useState([]);
    const [allScores, setAllScores] = useState([])
    const [scoreSort, setScoreSort] = useState(0);
    const [isRendered, setRendered] = useState(false);

    function handleSort(e) {
      setScoreSort(parseInt(e.target.value))
      if ((parseInt(e.target.value)) === 0) {
        const sortedScores = [...allScores].sort()
        setScores(sortedScores)
      } else {
        const sortedScores = [...allScores].filter(score => score.game.id === parseInt(e.target.value))
        setScores(sortedScores)
      }
    }

    const gameCategories = {                
    1: "General Knowledge",
    5: "Board Games",
    6: "Video Games",
    7: "Science & Nature",
    8: "Mythology",
    9: "Sports",
    10: "History"
  }
    

    useEffect(() => {
        fetch(`/scores`).then((response) => {
          if (response.ok) {
            response.json().then((scores) => {
              setAllScores(scores);
              setScores(scores);

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
          // ✅ clear the interval so state is no longer updated
          clearInterval(timer);
          };
// -- ^^ To prevent coded in load time, comment out this block of code ^^

      }, []);


    return (
      <div className="table">
          <h2>Top Scores</h2>
          { isRendered ? 
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                  <th>Game</th>
                </tr>
              </thead>
              <tbody>
                {scores.map(s => <tr>
                  <td>{s.user.username}</td>
                  <td>{s.score}</td>
                  <td>{gameCategories[s.game.id]}</td>
                  </tr>)}
              </tbody>
            </table>
              :
              <div>
                <img src={trebexia_logo} alt="logo" className="App-logo"/> <br/>
              </div>
              
              }

            <label id="label" className="label">See high scores by game: </label>
            <select id="select-game" onChange={handleSort} value={scoreSort} className="dropdown">
                <option value="0">All Games</option>
                <option value="1">General Knowledge</option>
                <option value="5">Board Games</option>
                <option value="6">Video Games</option>
                <option value="7">Science & Nature</option>
                <option value="8">Mythology</option>
                <option value="9">Sports</option>
                <option value="10">History</option>
            </select>


            <br/>
           
      </div>
    )
}

export default Scores;