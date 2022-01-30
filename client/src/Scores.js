import React, { useState, useEffect } from "react";
import './styles/App.css';
import ScoreCard from "./ScoreCard";

function Scores({ api_url }) {
    const [scores, setScores] = useState([]);
    const [scoreSort, setScoreSort] = useState("All Games");

    function handleSort(e) {
      setScoreSort(e.target.value)
      console.log(scoreSort)
      
      const sortedScores = [...scores].filter(score => score.game.id === scoreSort)
      console.log(sortedScores)
    }
    

    useEffect(() => {
        fetch(`${api_url}/scores`).then((response) => {
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
                  <td>{s.game.id}</td>
                  </tr>)}
              </tbody>
            </table>

            <label id="label" className="label">See high scores by game: </label>
            <select id="select-game" onChange={handleSort} value={scoreSort} className="dropdown">
                <option value="1">All Games</option>
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