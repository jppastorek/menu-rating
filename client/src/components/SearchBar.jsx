import React from "react";
// import { Button } from "@mui/material";
import { TextInput, Button } from "@mantine/core";
import "./SearchBar.css";

const SearchBar = (props) => {
  const { input, handleChangeInput, search } = props;
  return (
    // <div className="search">
    //   <input
    //     type="text"
    //     id="item"
    //     // value={input.item}
    //     onChange={handleChangeInput}
    //   />
    //   <Button variant="contained" onClick={search}>
    //     Search
    //   </Button>
    // </div>
    <div className="search">
      <TextInput />
      <Button variant="filled" size="md" radius="xl">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
