import React, { useState } from 'react';
import './CheonLogin.scss';
import { useNavigate } from 'react-router-dom';

function CheonLogin() {
  const btnCheck = () => {
    fetch('http://10.58.52.237:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: emailInput,
        password: pwInput,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const [emailInput, setEmailIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const handleIdInput = event => {
    setEmailIdInput(event.target.value);
  };
  const handlePwInput = event => {
    setPwInput(event.target.value);
  };
  const btnActive = () => {
    emailInput.includes('@') && pwInput.length > 5
      ? setDisabled(false)
      : setDisabled(true);
  };
  const goToMain = () => {
    navigate('/cheon-main');
  };
  return (
    <div className="loginform">
      <header>westargram</header>
      <div>
        <input
          type="text"
          name="email"
          className="text-file"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={emailInput}
          onChange={handleIdInput}
          onKeyUp={btnActive}
        />
        <input
          type="password"
          name="pw"
          className="text-file"
          placeholder="비밀번호"
          value={pwInput}
          onChange={handlePwInput}
          onKeyUp={btnActive}
        />
        <input
          type="button"
          value="로그인"
          className="push-btn"
          disabled={disabled}
          onClick={btnCheck}
        />
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default CheonLogin;
