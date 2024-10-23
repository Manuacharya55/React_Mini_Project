import React from "react";
import { useContext } from "react";
import { ContactContext } from "./Context.jsx";

const AllContact = () => {
  const { contact, dispatch } = useContext(ContactContext);

  // Handle delete functionality
  const handleDelete = (id) => {
    dispatch({ type: "deleteContact", id });
  };

  return (
    <div className="contact-holder">
      {contact && contact.map((curEle) => (
        <div className="contact-card" key={curEle.id}>
          <h2>{curEle.username}</h2>
          <p>{curEle.email}</p>
          <p>{curEle.phonenumber}</p>
          <button id="delete" onClick={() => handleDelete(curEle.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllContact;
