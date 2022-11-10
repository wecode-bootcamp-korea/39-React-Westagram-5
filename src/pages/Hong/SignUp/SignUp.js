import '../Login/HongLogin.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [id, idValue] = useState('');
  const [pw, pwValue] = useState('');
  const [name, setName] = useState('');

  const saveUserName = e => {
    setName(e.target.value);
  };

  const saveUserId = e => {
    idValue(e.target.value);
  };

  const saveUserPw = e => {
    pwValue(e.target.value);
  };

  const valid = id.includes('@') && pw.length >= 5;

  const disable = valid ? false : true;

  const signUp = () => {
    fetch('http://10.58.52.182:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ email: id, password: pw, name: name }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('sohard-token', data);
      });
  };

  return (
    <div className="login_container_box">
      <h1 className="title">회원가입</h1>
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
          // onKeyUp={pressEnter}
        />
        <input
          onChange={saveUserName}
          type="text"
          id="password"
          placeholder="이름"
        />

        <button
          className="login_btn"
          type="button"
          onClick={signUp}
          disabled={disable}
        >
          회원가입
        </button>
      </div>
      <p className="wrongPw">
        <Link to="" onClick={signUp}>
          {' '}
          회원가입
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
