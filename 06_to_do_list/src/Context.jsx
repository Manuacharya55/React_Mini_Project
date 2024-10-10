import { createContext, useState, useRef } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(false);
  const todoRef = useRef();
  return (
    <TodoContext.Provider value={{ todo, setTodo, todoRef, isEdit, setEdit,editIndex,setEditIndex }}>
      {children}
    </TodoContext.Provider>
  );
};
