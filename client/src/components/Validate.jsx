import React from "react";

const ValidateForm = (props) => {
  const { handleChangeInput, validationCode, onSubmit } = props;
  return (
    <div id="container">
      <h2 className="header">Validate your account.</h2>
      <div className="form email">
        <label htmlFor="email">6-Digit Code</label>
        <input
          type="text"
          name="validation-code"
          id="validation-code"
          autoFocus=""
          required=""
          onChange={handleChangeInput}
          value={validationCode}
        />
        <span className="error" />
      </div>
      <button
        id="validateButton"
        onClick={() => {
          onSubmit(validationCode);
        }}
      >
        Submit
      </button>
      <p>
        Didn't get a code? <a href="localhost:3000">Click here.</a>
      </p>
    </div>
  );
};

export default ValidateForm;
