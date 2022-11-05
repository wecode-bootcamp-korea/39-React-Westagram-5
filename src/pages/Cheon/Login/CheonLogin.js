import React, { useState } from 'react';
import './CheonLogin.scss';
import '../../../styles/reset.scss';

function CheonLogin() {
  const [value, setValue] = useState('');

function handleInput (event) {
  setValue(event.target.value);

  return (
    <div className="loginform">
      <header>westargram</header>
      <div>
        <input
          type="text"
          name="email"
          className="text-file"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={value}
          onChange={handleInput}
        />
        <input
          type="text"
          name="pw"
          className="text-file"
          placeholder="비밀번호"
          value={value}
          onChange={handleInput}
        />
        <input type="button" value="로그인" className="push-btn" />
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default CheonLogin;
