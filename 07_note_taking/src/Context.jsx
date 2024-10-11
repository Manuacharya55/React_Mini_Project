import { createContext, useEffect, useRef, useState } from "react";

export const NotesContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(localNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const noteRef = useRef();
  const titleRef = useRef();
  return (
    <NotesContext.Provider value={{ notes, setNotes, noteRef, titleRef }}>
      {children}
    </NotesContext.Provider>
  );
};
