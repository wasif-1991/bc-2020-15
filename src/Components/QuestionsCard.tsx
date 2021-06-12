import React, { useState } from 'react';
import { quizProps } from './Types';

const QuestionsCard: React.FC<quizProps> = ( {question, options, callback } ) => {

    const [userAns, setUserAns] = useState("");

    const handleAnswer = (ans: any) => {
        // console.log(ans.target.value);
        setUserAns(ans.target.value);
    }

    return(
        <>
            <h1>Welcome to Quiz App</h1>
            <h3>Question: { question } </h3>

            <form onSubmit={(event) => callback(event, userAns)}>

                {
                    options.map( (option: string, index: number) => {
                        return(
                            <>
                                <div className="radio-opt">
                                    <label className="radio-btn" key={index}>
                                        <input type="radio" name="option"
                                        value={option}
                                        required
                                        onChange={handleAnswer}
                                        checked={userAns === option} />
                                        {option}
                                    </label>
                                </div>
                            </>
                        );
                    })
                }

                <input className="button" type="submit"/>
            </form>
        </>
    );
}

export default QuestionsCard;