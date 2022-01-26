import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;


function Start ({ handleStart, user, onLogin, onLogout }) {

    const startQuiz = () => handleStart(true)
 
    return (
        <Intro>
            <h1>Go ahead smarty-pants.</h1>
            <h4>Test your trivia mettle.</h4>
            {/* { user ? 
                <h4>Welcome, {user.username}!</h4> :
                <h4>Create a login</h4>
            } */}
            <Button onClick={startQuiz} css={btnCSS}>Begin</Button>
        </Intro>
    )
}

export default Start;