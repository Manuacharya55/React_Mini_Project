import { useEffect, useReducer } from "react";
import { createContext } from "react";

export const ContactContext = createContext();

export const CreateContactContext = ({ children }) => {
  let initialContactList = [];

  // Safely retrieve contacts from localStorage
  const contactStored = localStorage.getItem("contact");
  if (contactStored) {
    try {
      initialContactList = JSON.parse(contactStored);
    } catch (error) {
      initialContactList = [];
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "addContact":
        return [...state, action.payload]
      case "deleteContact":
        return state.filter((contact) => contact.id !== action.id); 
      default:
        return state;
    }
  };

  const [contact, dispatch] = useReducer(reducer, initialContactList);

  // Store updated contact list in localStorage when the contact state changes
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contact));
  }, [contact]);

  return (
    <ContactContext.Provider value={{ contact, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};
