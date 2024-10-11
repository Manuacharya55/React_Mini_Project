import { v4 as uuid } from "uuid"
import { useContext, useDebugValue } from "react";
import { NotesContext } from "./Context";

const Form = () => {
    const {noteRef,titleRef,setNotes,notes} = useContext(NotesContext);

    const handleSubmit = () =>{
        const noteValue = {
            noteId : uuid(),
            title : titleRef.current.value,
            content : noteRef.current.value
        }

        setNotes((prev)=> [...prev,noteValue]);
        noteRef.current.value = '';
        titleRef.current.value ='';
    }
  return (
    <form action="" onSubmit={(e)=> e.preventDefault()}>
      <h1>Add Your Notes</h1>
      <input type="text" name="" id="" ref={titleRef}/>
      <textarea name="" id="" ref={noteRef}></textarea>
      <button onClick={handleSubmit}>Add Note</button>
    </form>
  );
};

export default Form;
