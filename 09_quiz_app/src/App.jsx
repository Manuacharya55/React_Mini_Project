import QuizQuestion from "./QuizQuestion";
import { QuizContextProvider } from "./Context";
function App() {
  return (
    <QuizContextProvider>
      <QuizQuestion></QuizQuestion>
    </QuizContextProvider>
  );
}

export default App;
