import React from "react";
import { Button } from "@mui/material";

const SearchBar = (props) => {
  const { input, handleChangeInput, search } = props;
  return (
    <div className="search">
      <input
        type="text"
        id="item"
        value={input.item}
        onChange={handleChangeInput}
      />
      <Button variant="contained" onClick={search}>Search</Button>
    </div>
  );
};

export default SearchBar;