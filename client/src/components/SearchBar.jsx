import React from "react";

const SearchBar = (props) => {
  const { input, handleChangeInput, getItem } = props;
  return (
    <div className="search">
      <input
        type="text"
        id="item"
        value={input.item}
        onChange={handleChangeInput}
      />
      <button onClick={getItem}>Get Item</button>
    </div>
  );
};

export default SearchBar;