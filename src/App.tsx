import React, { useEffect, useState } from 'react';
import { getQuestions } from './Components/Api';
import { quizTypesMain } from './Components/Types';
import QuestionsCard from './Components/QuestionsCard';
import './App.css';

function App() {

  const [quizquest, setQuizQuest] = useState<quizTypesMain[]>([]);
  const [quizStep, setQuizStep] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [userResult, setUserResult] = useState(false);

  useEffect( () => {
    const getQuestData = async () => {
      const getQuizQuestions = await getQuestions(5, "easy");
      setQuizQuest(getQuizQuestions);
    }
    
    getQuestData();

    // console.log(quizquest[0].question);
    // console.log(quizquest[0].options);
  }, []);

  const handleSubmission = (e: React.FormEvent<EventTarget>, userInput: string) => {
    e.preventDefault();

    // console.log(userInput);

    // console.log(quizquest[quizStep].answer);

    if(userInput === quizquest[quizStep].answer){
      setUserScore(userScore+1);
    }

    console.log(`You selected "${userInput}". The correct answer is "${quizquest[quizStep].answer}".`);
    
    if(quizStep !== quizquest.length - 1){
      setQuizStep(quizStep+1);
    }else{
      // alert(`Quiz Completed! You final score is ${userScore} out of ${quizquest.length}.`)
      setUserResult(true);
    }
  }


  if(!quizquest.length){
    return <h2 style={{ textAlign: "center", paddingTop: "40px" }}>Loading Quiz ...</h2>
  }

  if(userResult){
    return(
      <div className="result">
        <h2>Result</h2>
        <h4>
          {(userScore >= 4)? "Congratulation!" : "Oops!"} Your final score is {userScore} out of {quizStep}.
        </h4>
        <button className="button" onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }


  return (
    <div className="App">
      <QuestionsCard 
      question={quizquest[quizStep].question}
      options={quizquest[quizStep].options}
      callback={handleSubmission} />
    </div>
  );
}

export default App;
