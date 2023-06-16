import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  //need to add validation script for onBlur on the inputs

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
  });

  const handleChangeInput = (e) => {
    switch (e.target.id) {
      case "firstName":
        setInput({
          ...input,
          firstName: e.target.value,
        });
        break;
      case "lastName":
        setInput({
          ...input,
          lastName: e.target.value,
        });
        break;
      case "email":
        setInput({
          ...input,
          email: e.target.value,
        });
        break;
      case "password":
        setInput({
          ...input,
          password: e.target.value,
        });
        break;
      case "confirmPassword":
        setInput({
          ...input,
          confirmPassword: e.target.value,
        });
        break;
      case "location":
        setInput({
          ...input,
          location: e.target.value,
        });
        break;
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    //somehow I need to get the body into JSON, but the form is sending query 
    let data = {
      first_name: input.firstName,
      last_name: input.lastName,
      email: input.email,
      password: input.password,
      residence: input.location
    }
    console.log(`Submitting: ${data.first_name}`);
    const response = await fetch('http://localhost:5000/api/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    return response.json();
  };

  const getUser = async (e) => {
    e.preventDefault();
    let num = Math.floor(Math.random() * (22 - 1 + 1)) + 1;
    let response = await fetch(`/api/user/${num}`);
    const jsonData = await response.json();
    console.log(jsonData);
    alert(jsonData.first_name + ' sucks balls.');
  };

  return (
    <>
      <Form
        handleChangeInput={handleChangeInput}
        onSubmitForm={onSubmitForm}
        getUser={getUser}
        firstValue={input.firstName}
        lastValue={input.lastName}
        emailValue={input.email}
        passwordValue={input.password}
        confirmValue={input.confirmPassword}
        residenceValue={input.location}
      />
    </>
  );
}

export default App;
