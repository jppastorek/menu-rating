import React from "react";

const Form = (props) => {
  const { handleChangeInput, onSubmitForm } = props;
  return (
    <div id="container">
      <form action="" id="form" noValidate="">
        <h2 className="header">Create an account.</h2>
        <div className="form name">
          <label htmlFor="firstName">Name *</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="first"
            autofocus=""
            required=""
            onChange={handleChangeInput}
          />
          <span className="error" />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="last"
            autofocus=""
            required=""
            onChange={handleChangeInput}
          />
          <span className="error" />
        </div>
        <div className="form email">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@example.com"
            autofocus=""
            autoComplete="email"
            required=""
            onChange={handleChangeInput}
          />
          <span className="error" />
        </div>
        <div className="form password">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Choose a password"
            minLength={8}
            required=""
            onChange={handleChangeInput}
          />
          <span className="error" />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            minLength={8}
            required=""
            onChange={handleChangeInput}
          />
          <span className="error" />
        </div>
        <div className="form location">
          <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter your location"
              onChange={handleChangeInput}
            />
        </div>
        <div className="form terms">
          <input type="checkbox" name="terms" id="terms" />
          <label id="terms-label" htmlFor="terms">
            I confirm that I have read the 
            <a href="#">Terms and Conditions</a>.
          </label>
        </div>
        <button type="submit" id="submit" onSubmit={onSubmitForm}>
          Accept &amp; Continue
        </button>
      </form>
      <p>
        Already have an account? <a href="#">Log in</a>
      </p>
    </div>
  );
};

export default Form;