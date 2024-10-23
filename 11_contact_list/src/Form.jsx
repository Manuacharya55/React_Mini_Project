import React, { useRef, useContext } from "react";
import { ContactContext } from "./Context.jsx";
import { v4 as uuid } from "uuid";

const Form = () => {
  const { dispatch } = useContext(ContactContext);
  const username = useRef();
  const email = useRef();
  const phonenumber = useRef();

  const handleSubmit = () => {
    const obj = {
      id: uuid(),
      username: username.current.value,
      email: email.current.value,
      phonenumber: phonenumber.current.value,
    };

    console.log(obj);
    dispatch({ type: "addContact", payload: obj });

    // Clear the input fields after submission
    username.current.value = "";
    email.current.value = "";
    phonenumber.current.value = "";
  };

  return (
    <form action="#" onSubmit={(e) => e.preventDefault()}>
      <h1>Add Contact</h1>
      <label htmlFor="">Enter user's name</label>
      <input type="text" ref={username} />
      <label htmlFor="">Enter user's email</label>
      <input type="email" ref={email} />
      <label htmlFor="">Enter user's phone number</label>
      <input type="tel" ref={phonenumber} />

      <button type="submit" onClick={handleSubmit}>
        Add Contact
      </button>
    </form>
  );
};

export default Form;
