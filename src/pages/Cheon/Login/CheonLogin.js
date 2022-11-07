import React, { useState } from 'react';
import './CheonLogin.scss';
import '../../../styles/reset.scss';
import { useNavigate } from 'react-router-dom';

const CheonLogin = () => {
  const [emailInput, setEmailIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const [disabled, setdisabled] = useState(true);
  const navigate = useNavigate();

  const handleIdInput = event => {
    setEmailIdInput(event.target.value);
  };
  const handlePwInput = event => {
    setPwInput(event.target.value);
  };
  const btnActive = () => {
    emailInput.includes('e.g., @') && pwInput.length > 5
      ? setdisabled(false)
      : setdisabled(true);
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
          onClick={goToMain}
        />
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default CheonLogin;
