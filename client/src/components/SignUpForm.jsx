import React from "react";

const SignUpForm = (props) => {
  const { handleChangeInput, onSubmitForm, getUser, firstValue, lastValue, emailValue, passwordValue, confirmValue, residenceValue } = props;
  return (
    <div id="container">
      <form action="api/user" method="post" id="form" noValidate="" onSubmit={onSubmitForm}>
        <h2 className="header">Create an account.</h2>
        <div className="form name">
          <label htmlFor="firstName">Name *</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="first"
            autoFocus=""
            required=""
            onChange={handleChangeInput}
            value={firstValue}
          />
          <span className="error" />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="last"
            autoFocus=""
            required=""
            onChange={handleChangeInput}
            value={lastValue}
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
            autoFocus=""
            autoComplete="email"
            required=""
            onChange={handleChangeInput}
            value={emailValue}
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
            value={passwordValue}
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
            value={confirmValue}
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
              value={residenceValue}
            />
        </div>
        <div className="form terms">
          <input type="checkbox" name="terms" id="terms" />
          <label id="terms-label" htmlFor="terms">
            I confirm that I have read the 
            <a href="localhost:3000">Terms and Conditions</a>.
          </label>
        </div>
        <button type="submit" id="submit" onClick={onSubmitForm}>
          Accept &amp; Continue
        </button>
        <button id="test" onClick={getUser}>Test</button>
      </form>
      <p>
        Already have an account? <a href="localhost:3000">Log in</a>
      </p>
    </div>
  );
};

export default SignUpForm;