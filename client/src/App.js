import React, { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import ItemDisplay from "./components/ItemDisplay";
import Home from "./components/Home";
import { TextField } from "@mui/material";

function App() {
  //need to add validation script for onBlur on the inputs

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    item: "",
    items: [],
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
      case "item":
        setInput({
          ...input,
          item: e.target.value,
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
      residence: input.location,
    };
    console.log(`Submitting: ${data.first_name}`);
    const response = await fetch("http://localhost:5000/api/user", {
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
    alert(jsonData.first_name + " is awesome.");
  };

  const getItem = async () => {
    let id = input.item;
    let response = await fetch(`/api/item/${id}`);
    const jsonData = await response.json();
    console.log(jsonData);
    setInput({
      ...input,
      items: input.items.concat(jsonData),
    });
  };

  return (
    <>
      <SignUpForm
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

      <ItemDisplay items={input.items} />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" required size="medium" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </>
  );
}

export default App;
