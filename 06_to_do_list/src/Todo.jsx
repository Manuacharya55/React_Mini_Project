import { useContext } from "react";
import { TodoContext } from "./Context.jsx";
import { v4 as uuid } from "uuid";

const Todo = () => {
  const { setTodo, todoRef, isEdit, setEdit, editIndex, setEditIndex, todo } =
    useContext(TodoContext);

  const handleClick = () => {
    if (isEdit) {
      const arr = todo.map((ele) => {
        if (ele.taskId === editIndex) {
          return { ...ele, taskName: todoRef.current.value };
        } else {
          return ele;
        }
      });

      setTodo(arr);
      setEdit(false);
      setEditIndex(null);
    } else {
      const obj = {
        taskId: uuid(),
        taskName: todoRef.current.value,
        isCompleted: false,
      };
      setTodo((prev) => [...prev, obj]);
    }

    todoRef.current.value = "";
  };

  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <h1>Add Todo</h1>
        <input type="text" name="" id="" ref={todoRef} />
        <button onClick={handleClick}>add todo</button>
      </form>
    </>
  );
};

export default Todo;
