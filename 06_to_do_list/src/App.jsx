import { TodoProvider } from "./Context.jsx";
import  DisplayTodo from "./DisplayTodo.jsx";
import Todo from "./Todo.jsx";
function App() {
  return (
    <TodoProvider>
      <Todo />
      <DisplayTodo/>
    </TodoProvider>
  );
}

export default App;
