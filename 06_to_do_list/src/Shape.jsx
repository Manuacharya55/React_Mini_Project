import { useContext } from "react";
import { TodoContext } from "./Context.jsx";

const Shape = ({ taskName, id, isComplete }) => {
  const { todo, setTodo, todoRef ,setEdit,setEditIndex} = useContext(TodoContext);

  const handleChange = (taskId) => {
    const todoTask = todo.map((ele) => {
      if (ele.taskId === taskId) {
        let data = !ele.isCompleted;
        return { ...ele, isCompleted: data };
      }
      return ele;
    });
    setTodo(todoTask);
  };

  const handleDelete = (taskId) => {
    const todoTask = todo.filter((ele) => {
      return ele.taskId != taskId;
    });
    setTodo(todoTask);
  };

  const handleEdit = (taskId) => {
    const task = todo.find((ele) => ele.taskId === taskId);
    todoRef.current.value = task.taskName;
    setEdit(true);
    setEditIndex(task.taskId);
  };

  return (
    <div className="task">
      <div className="main">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => handleChange(id)}
        />
        <p className={isComplete ? "mark" : ""}>{taskName}</p>
      </div>
      <div className="ops">
        <button id="delete" onClick={() => handleDelete(id)}>
          delete
        </button>
        <button id="edit" onClick={() => handleEdit(id)}>
          edit
        </button>
      </div>
    </div>
  );
};

export default Shape;
