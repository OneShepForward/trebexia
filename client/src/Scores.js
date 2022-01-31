import React, { useState, useEffect } from "react";
import './styles/App.css';
import ScoreCard from "./ScoreCard";

function Scores({ api_url }) {
    const [scores, setScores] = useState([]);
    const [allScores, setAllScores] = useState([])
    const [scoreSort, setScoreSort] = useState(0);

    function handleSort(e) {
      setScoreSort(parseInt(e.target.value))
      // console.log("value: ", e.target.value)
      // console.log("scoreSort: ", scoreSort)
      // const test_array = [...scores]
      // console.log("test: ", test_array[0].game.id)
      if ((parseInt(e.target.value)) === 0) {
        const sortedScores = [...allScores].sort()
        setScores(sortedScores)
      } else {
      // const sortedScores = [...scores].filter(score => score.game.id === scoreSort)
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
        fetch(`${api_url}/scores`).then((response) => {
          if (response.ok) {
            response.json().then((scores) => {
              console.log("scores: ", scores);
              setAllScores(scores);
              setScores(scores);
            });
          } else {
            response.json().then((error) => console.log(error))
          }
        });
      }, []);


    return (
      <div className="table">
          <h2>Top Scores</h2>
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
                  {/* gameCategories object created to populate names */}
                  <td>{gameCategories[s.game.id]}</td>
                  </tr>)}
              </tbody>
            </table>

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