import React from "react";
import Button from "./Button";


function QuestionCard({ q, handleNextQ, num, qNum }) {

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

    function formatString(string) {
        return string.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&lt;/g, '<')
        .replace(/&apos;/g, "'").replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"').replace(/&#039;/g, "'")
    }
    
    // Wait for incorrect answers to load before continuing...
    if (incorrect_answers) {
        const options = shuffle([...incorrect_answers, correct_answer])
        const formattedOptions = []
        options.forEach(el => {
            formattedOptions.push(formatString(el))
        })
        const formattedQuestion = formatString(question)
        
        if (num === qNum) {
            return (
                <div className="question" key={id}>
                    <h4>{formattedQuestion}</h4>
                    <ul className="options">
                    {formattedOptions.map((item, index)=> (
                        <li>
                            <Button 
                                key={index} 
                                name={item}
                                onClick={(e)=>handleClick(e)}>{item}
                            </Button>
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