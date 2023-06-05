import React, { useState } from "react";
import './App.css';
import Form from './components/Form';
const axios = require('axios');

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
    axios.post('localhost:5000/user', {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      residence: this.state.location
    })
  }

  const getUser = async (e) => {
    e.preventDefault();
    let result = await fetch('api/user/2');
    console.log(result);
  }

  return (
    <>
      <Form handleChangeInput={handleChangeInput} onSubmitForm={onSubmitForm} getUser={getUser}/>
    </>
  );
}

export default App;