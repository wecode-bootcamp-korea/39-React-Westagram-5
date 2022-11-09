import './NamLogin.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import { useState } from 'react';
// useNavigate외에 다른 방법으론 import { Link } from 'react-router-dom';

function NamLogin() {
  const Navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const handleIdInput = e => {
    setInputId(e.target.value);
  };

  const handlePwInput = e => {
    setInputPw(e.target.value);
  };
  const handleActive = inputId.includes('@') && inputPw.length >= 5;
  // inputId && inputId.includes('@') && inputPw && inputPw.length >= 5;

  return (
    <>
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
                onChange={handleIdInput}
              />
            </div>
          </div>
          <div className="bar-wrapper">
            <div className="password-bar">
              <input
                className="input-pw"
                type="password"
                placeholder="Password"
                onChange={handlePwInput}
              />
            </div>
          </div>
          <div className="bar-wrapper">
            <div className="button-wrap">
              <button
                disabled={!handleActive ? true : false}
                onClick={() => {
                  Navigate('/nammain');
                }}
                type="submit"
              >
                Log in
              </button>
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
      <Footer />
    </>
  );
}

export default NamLogin;
