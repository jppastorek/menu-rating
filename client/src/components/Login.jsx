import React from "react";

const LoginForm = (props) => {
  const { handleChangeInput, emailValue, passwordValue, onLogin } = props;
  return (
    <div id="container">
      <h2 className="header">Login to your account.</h2>
      <div className="form email">
        <label htmlFor="email">Email</label>
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
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          required=""
          onChange={handleChangeInput}
          value={passwordValue}
        />
        <span className="error" />
      </div>
      <button
        id="loginButton"
        onClick={() => {
          onLogin(emailValue, passwordValue);
        }}
      >
        Log In
      </button>
      <p>
        Don't have an account? <a href="localhost:3000">Sign up.</a>
      </p>
    </div>
  );
};

export default LoginForm;
