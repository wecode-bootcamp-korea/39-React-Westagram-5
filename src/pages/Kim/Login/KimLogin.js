import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KimLogin.scss';

function KimLogin() {
  const navi = useNavigate();
  const [id, inputId] = useState('');
  const [pw, inputPw] = useState('');

  const loginId = e => {
    inputId(e.target.value);
  };
  const loginPw = e => {
    inputPw(e.target.value);
  };
  const keyDown = e => {
    if (e.code === 'Enter') {
      navi('/KimMain');
    }
  };
  const loginValid = id && id.includes('@') && pw && pw.length >= 4;
  return (
    <>
      <div className="all_login">
        <div className="login_logo">
          <h1 className="logo">Westagram</h1>
        </div>
        <div className="input_id">
          <input
            onChange={loginId}
            className="login_id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          ></input>
          <input
            onChange={loginPw}
            onKeyDown={keyDown}
            type="password"
            className="login_pw"
            placeholder="비밀번호"
          ></input>
        </div>
        <div className="login_button">
          <button
            onClick={() => {
              navi('/KimMain');
            }}
            disabled={!loginValid ? true : false}
            className="login_btn"
          >
            로그인
          </button>
        </div>
        <div className="forget">
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </>
  );
}

export default KimLogin;
