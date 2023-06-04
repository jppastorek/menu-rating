import React, { useState } from "react";
import './App.css';
import Form from './components/Form';

function App() {

  //need to add validation script for onBlur on the inputs
  
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: ""
  });
  
  const handleChangeInput = (e) => {
    switch (e.target.id) {
      case "firstName":
        setInput({
          ...input,
          firstName: e.target.value
        });
        break;
      case "lastName":
        setInput({
          ...input,
          lastName: e.target.value
        });
        break;
      case "email":
        setInput({
          ...input,
          email: e.target.value
        });
        break;
      case "password":
        setInput({
          ...input,
          password: e.target.value
        });
        break;
      case "confirmPassword":
        setInput({
          ...input,
          confirmPassword: e.target.value
        });
        break;
      case "location":
        setInput({
          ...input,
          location: e.target.value
        });
        break;
    }
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Form handleChangeInput={handleChangeInput} onSubmitForm={onSubmitForm}/>
    </>
  );
}

export default App;