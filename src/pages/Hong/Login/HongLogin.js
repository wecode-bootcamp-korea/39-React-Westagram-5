import './HongLogin.scss';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HongLogin() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };

  const usest = useState();

  const inputId = document.querySelector('#ID');
  const inputPassword = document.querySelector('#password');
  const button = document.querySelector('.login_btn');
  const able = () => {
    const idValue = inputId.value;
    const passwordValue = inputPassword.value;

    idValue.includes('@') && passwordValue.length > 5
      ? (button.disabled = false)
      : (button.disabled = true);
  };
  return (
    <>
      {' '}
      <form className="login_container_box">
        <h1 className="title">westagram</h1>
        <div className="input">
          <input
            type="text"
            id="ID"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input type="password" id="password" placeholder="비밀번호" />

          <button
            className="login_btn"
            type="button"
            onClick={() => {
              able();
              goToMain();
            }}
            disabled
          >
            {' '}
            로그인
          </button>
        </div>
        <p className="wrongPw">
          <Link to="/Signup"> 회원가입</Link>
        </p>
        <span className="idk_pw">비밀번호를 잊으셨나요?</span>
      </form>
    </>
  );
}

export default HongLogin;
