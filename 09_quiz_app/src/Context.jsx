import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const [question, setQuestion] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  return (
    <QuizContext.Provider
      value={{ question, correct, wrong, setQuestion, setCorrect, setWrong }}
    >
      {children}
    </QuizContext.Provider>
  );
};
