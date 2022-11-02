import './NamLogin.scss';
import React from 'react';
// import { Link } from 'react-router-dom';

function NamLogin() {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <sapn className="westa-logo">Westagram</sapn>
      </div>
      <div className="login-container">
        <div className="bar-wrapper">
          <div className="id-bar">
            <input
              className="input-id"
              type="text"
              placeholder="Phone number, username, or Email"
            />
          </div>
        </div>
        <div className="bar-wrapper">
          <div className="password-bar">
            <input
              className="input-pw"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="bar-wrapper">
          <div className="button-wrap">
            <button className="activate-button"> Log in</button>
          </div>
        </div>
      </div>
      <div className="password-wrap">
        <a
          className="password"
          href="https://www.instagram.com/accounts/password/reset/"
        >
          Forgot password?
        </a>
      </div>
    </div>
  );
}

export default NamLogin;
