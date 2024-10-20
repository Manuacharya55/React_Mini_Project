import React, { useContext } from "react";
import { quiz } from "./Questions.jsx";
import { QuizContext } from "./Context.jsx";
const QuizQuestion = () => {
  const { question, correct, wrong, setQuestion, setCorrect, setWrong } =
    useContext(QuizContext);

  const handleAnswer = (optionIndex) => {
    if (quiz[question].options[optionIndex] === quiz[question].answer) {
      setCorrect((prev) => prev + 1);
    } else {
      setWrong((prev) => prev + 1);
    }

    setQuestion((prev) => {
      if (prev < quiz.length - 1) return prev + 1;
    });
    console.log(question);
  };

  if (question < quiz.length) {
    return (
      <div className="quiz">
        <p>Question {question + 1}</p>
        <h3>{quiz[question].question}</h3>

        <div className="options">
          {quiz[question].options.map((option, optionIndex) => (
            <div
              className="option"
              key={optionIndex}
              onClick={() => handleAnswer(optionIndex)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="result">
      <h1>Quiz Complete!</h1>
      <p>Correct answers: <span id="correct">{correct}</span></p>
      <p>Wrong answers: <span id="wrong">{wrong}</span></p>
    </div>
  );
};

export default QuizQuestion;
