import React from "react";
import Button from "./Button";


function QuestionCard({ q, handleNextQ, num }) {

    const { id, question, correct_answer, incorrect_answers } = q;

    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    function handleClick(e) {
        if (e.target.name === correct_answer) {
            //if we decide to have point values based on question difficulty we can add that in here to have easy = 1, medium = 2, hard =3 
            handleNextQ(1);
        } else {
            handleNextQ(0);
        }
    }

    if (incorrect_answers) {
        // console.log("incorrect answers: ", incorrect_answers)
        const options = shuffle([...incorrect_answers, correct_answer])
        if (num === id) {
            return (
                <div className="question" key={id}>
                    <h4>{question}</h4>
                    <ul className="options">
                    {options.map((item, index)=> (
                        <li>
                            <Button 
                                key={index} 
                                name={item}
                                onClick={(e)=>handleClick(e)}>{item}</Button>
                        </li>
                    ))}
                    </ul>
                </div>
            );
        } else {
            return null;
        }
    }

}

export default QuestionCard;