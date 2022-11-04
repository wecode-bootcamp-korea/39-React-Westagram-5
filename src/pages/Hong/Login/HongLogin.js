import './HongLogin.scss';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HongLogin() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/HongMain');
  };

  const [id, idValue] = useState('');
  const [pw, pwValue] = useState('');

  const saveUserId = e => {
    idValue(e.target.value);
  };

  const saveUserPw = e => {
    pwValue(e.target.value);
  };

  const valid = id.includes('@') && pw.length >= 5;

  const disable = valid ? false : true;

  const pressEnter = e => {
    if (e.code === 'Enter') {
      goToMain();
    }
  };

  return (
    <form className="login_container_box">
      <h1 className="title">westagram</h1>
      <div className="input">
        <input
          onChange={saveUserId}
          type="text"
          id="ID"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={saveUserPw}
          type="password"
          id="password"
          placeholder="비밀번호"
          onKeyUp={pressEnter}
        />

        <button
          className="login_btn"
          type="button"
          onClick={goToMain}
          disabled={disable}
          onKeyUp={pressEnter}
        >
          로그인
        </button>
      </div>
      <p className="wrongPw">
        <Link to="/Signup"> 회원가입</Link>
      </p>
      <span className="idk_pw">비밀번호를 잊으셨나요?</span>
    </form>
  );
}

export default HongLogin;
