import { useContext } from "react";
import { TodoContext } from "./Context.jsx";
import Shape from "./Shape.jsx";
const DisplayTodo = () => {
  const { todo } = useContext(TodoContext);
  return (
    <div className="todo-holder">
        {todo.length===0 && <h2>No List Yet</h2>}
      {todo.map((curTask) => (
        <Shape
          key={curTask.taskId}
          taskName={curTask.taskName}
          id={curTask.taskId}
          isComplete={curTask.isCompleted}
        />
      ))}
    </div>
  );
};

export default DisplayTodo;
