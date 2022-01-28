import React from "react";
import Button from "./Button";

function QuestionCard({ q }) {

    const { id, question, correct_answer, incorrect_answers } = q;

    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    
    
    if (incorrect_answers) {
        console.log("incorrect answers: ", incorrect_answers)
        const options = shuffle([...incorrect_answers, correct_answer])
        return (
            <div className="question" key={id}>
                <h4>{question}</h4>
                <ul className="options">
                {options.map((item, index)=> (
                    <li>
                        <Button key={index}>{item}</Button>
                    </li>
                ))}
                </ul>
            </div>
        );
    } else {
        return (<h1>Loading...</h1>);
    }

}

export default QuestionCard;