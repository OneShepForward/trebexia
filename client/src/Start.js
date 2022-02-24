import React from 'react'
import { css } from 'styled-components'
import Button from './Button';


const btnCSS = css`
    margin-top: 5em;
`;


function Start ({ handleStart, handleSort, sortBy  }) {

    const startQuiz = () => handleStart(true)

    //function when game selected from drop down to pass that info back up to Game component 
    function handleChange(e) {
        handleSort(e.target.value)
    }  
    
    return (
        <div className="start-quiz">

            <h1>Go ahead, smarty-pants.</h1>
            <h4>Let's see how much of a trivia guru you are.</h4>
            <br/>
            <label id="label" className="label">Select a game: </label>
            <select id="select-game" 
                onChange={handleChange} 
                value={sortBy}
                className="dropdown">
                <option value="1">General Knowledge</option>
                <option value="5">Board Games</option>
                <option value="6">Video Games</option>
                <option value="7">Science & Nature</option>
                <option value="8">Mythology</option>
                <option value="9">Sports</option>
                <option value="10">History</option>
            </select>
            <br/>
            <br/>
            <Button onClick={startQuiz} css={btnCSS}>Begin</Button>

        </div>

    )
}

export default Start;