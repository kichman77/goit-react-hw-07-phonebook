import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import "./App.css";

import adddd from "./redux/contacts/operations";
const { addContact, deleteContact } = adddd;
deleteContact("id-1");

const x = { name: "Bobick", phone: "09512345673434" };
addContact(x);
const App = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
