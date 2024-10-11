import React, { useContext } from "react";
import { NotesContext } from "./Context.jsx";
const Display = () => {
  const { notes, setNotes } = useContext(NotesContext);

  const handleDelete = (noteId) => {
    const filteredNotes = notes.filter((curNote) => curNote.noteId !== noteId);
    setNotes(filteredNotes);
  };

  return (
    <div className="note-holder">
      {notes.length < 0 && <h1>No Notes </h1>}

      {notes.map((curNotes) => (
        <div key={curNotes.noteId} className="note">
          <div className="content">
            <h2>{curNotes.title}</h2>
            <p>{curNotes.content}</p>
          </div>
          <button onClick={() => handleDelete(curNotes.noteId)}>Delete</button>
        </div>
      ))}
      {console.log(notes)}
    </div>
  );
};

export default Display;
