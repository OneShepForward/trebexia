import React, { useState, useEffect } from "react";
import './styles/App.css';
import ScoreCard from "./ScoreCard";

function Scores({ api_url }) {
    const [scores, setScores] = useState([])
    console.log(scores)

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

            <label id="label" className="label">Select a game: </label>
            <select id="select-game" className="dropdown">
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
                <option value="Option 5">Option 5</option>
                <option value="Option 6">Option 6</option>
                <option value="Option 7">Option 7</option>
            </select>


            <br/>
           
      </div>
    )
}

export default Scores;