import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './KimLogin.scss';

function KimLogin() {
  function LoginEvent() {
    const id = document.getElementsByClassName('login_id')[0];
    const pw = document.getElementsByClassName('login_pw')[0];
    //const login = document.getElementsByClassName('login_btn');
    pw.addEventListener('keyup', function (e) {
      const id = document.querySelector('.login_id').value;
      const password = document.querySelector('.login_pw').value;
      const btnChange = document.querySelector('.login_btn');
      if (id.length > 0 && password.length > 0) {
        btnChange.style.backgroundColor = '#0095F6';
      } else {
        btnChange.style.backgroundColor = '#bfdffd';
      }
    });
  }

  return (
    <>
      <div className="all_login">
        <div className="login_logo">
          <h1 className="logo">Westagram</h1>
        </div>
        <div className="input_id">
          <input
            onKeyUp={LoginEvent}
            className="login_id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          ></input>
          <input
            onKeyUp={LoginEvent}
            type="password"
            className="login_pw"
            placeholder="비밀번호"
          ></input>
        </div>
        <Link to="/KimMain">
          <div className="login_button">
            <button className="login_btn">로그인</button>
          </div>
        </Link>
        <div className="forget">
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </>
  );
}

export default KimLogin;
