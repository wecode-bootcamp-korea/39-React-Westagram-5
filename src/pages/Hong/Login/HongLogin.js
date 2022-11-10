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
    if (e.code === 'Enter' && disable === false) {
      goToMain();
    }
  };

  // const signUp = () => {
  //   fetch('http://10.58.52.182:3000/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({ email: id, password: pw }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       localStorage.setItem('sohard-token', data);
  //     });
  // };
  const Login = () => {
    fetch('http://10.58.52.182:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ email: id, password: pw }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('sohard-token', data.accessToken);
        goToMain();
      });
  };

  return (
    <div className="login_container_box">
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
          onClick={Login}
          disabled={disable}
        >
          로그인
        </button>
      </div>
      <p className="wrongPw">
        <Link to="/SignUp"> 회원가입</Link>
      </p>
      <span className="idk_pw">비밀번호를 잊으셨나요?</span>
    </div>
  );
}

export default HongLogin;
