import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "Delhi", isCorrect: true },
        { id: 1, text: "Mumbai", isCorrect: false },
        { id: 2, text: "Lucknow", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: false },
      ],
    },
    {
      text: "In Indian Constitution the idea of A Union of States in the Indian Constitution has been derived from",
      options: [
        { id: 0, text: "The Australian Constitution", isCorrect: true },
        { id: 1, text: "Constitution of Belgium", isCorrect: false },
        { id: 2, text: "Constitution of Colombia", isCorrect: false },
        { id: 3, text: "Constitution of Bhutan", isCorrect: false },
      ],
    },
    {
      text: "Which Article of the Indian Constitution directs the State to take steps to separate the judiciary from the executive in the public services of the State?",
      options: [
        { id: 0, text: "Article 58", isCorrect: false },
        { id: 1, text: "Article 44", isCorrect: false },
        { id: 2, text: "Article 50", isCorrect: true },
        { id: 3, text: "Article 52", isCorrect: false },
      ],
    },
    {
      text: "How many Fundamental Rights have been provided by the Constitution of India?",
      options: [
        { id: 0, text: "eight", isCorrect: false },
        { id: 1, text: "six", isCorrect: true },
        { id: 2, text: "five", isCorrect: false },
        { id: 3, text: "nine", isCorrect: false },
      ],
    },
    {
      text: "What is the quorum to constitute a meeting of Lok Sabha?",
      options: [
        { id: 0, text: "Half of the total members of the House", isCorrect: false },
        { id: 1, text: "A quarter of the total members of the House", isCorrect: false },
        { id: 2, text: "One- fifth of the total members of the House", isCorrect: false },
        { id: 3, text: "One-tenth of the total members of the House.", isCorrect: true },
      ],
    },
    {
      
      text:"The Governor of a State is appointed by the President on the advice of the",
      options:[
        {id : 0 ,text :"Prime Minister" , isCorrect:true},
        {id : 1 , text:"Vice President" , isCorrect:false},
        {id : 2, text : "Chief Minister" , isCorrect:false},
        {id : 3 , text :"chief Justice" , isCorrect:false},
      ],
    },
    {
      text :"For what period does the Vice President of India hold office ?",
      options:[
        {id : 0 ,text :"5 years" , isCorrect:true},
        {id : 1 , text:"Till the age of 65 years" , isCorrect:false},
        {id : 2, text : "6 years" , isCorrect:false},
        {id : 3 , text :"2 years" , isCorrect:false},
      ],
    },
    {
      text :"The total number of members nominated by the President to the Lok Sabha and the RajyaSabha is",
      options:[
        {id : 0 ,text :"16" , isCorrect:false},
        {id : 1 , text:"18" , isCorrect:false},
        {id : 2, text : "14" , isCorrect:true},
        {id : 3 , text :"12" , isCorrect:false},
      ],
    },
    {
      text:"Who appoints the Prime Minister of India ?",
      options :[
        {id : 0 ,text :"Lok Sabha" , isCorrect:false},
        {id : 1 , text:"President" , isCorrect:true},
        {id : 2, text : "Parliament" , isCorrect:false},
        {id : 3 , text :"Citizens of India" , isCorrect:false},
      ]
    },
    {
      text:"Minimum age required to contest for Presidentship is",
      options :[
        {id : 0 ,text :"23 years" , isCorrect:false},
        {id : 1 , text:"21 years" , isCorrect:false},
        {id : 2, text : "35 years" , isCorrect:true},
        {id : 3 , text :"30 years" , isCorrect:false},
      ]
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>! Quiz !</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
