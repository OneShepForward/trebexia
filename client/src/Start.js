import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button';


const btnCSS = css`
    margin-top: 5em;
`;


function Start ({ handleStart, user, onLogin, onLogout }) {

    const startQuiz = () => handleStart(true)
 
    return (
        <div className="start-quiz">

            <h1>Go ahead smarty-pants.</h1>
            <h4>Let's see how much of a trivia guru you are.</h4>
            <br/>
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

            {/* { user ? 
                <h4>Welcome, {user.username}!</h4> :
                <h4>Create a login</h4>
            } */}
            <br/>
            <Button onClick={startQuiz} css={btnCSS}>Begin</Button>

        </div>

    )
}

export default Start;