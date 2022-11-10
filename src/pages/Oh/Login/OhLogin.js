import './OhLogin.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const navigate = useNavigate();

  const handleIdInput = e => {
    setInputId(e.target.value);
  };

  const handlePwInput = e => {
    setInputPw(e.target.value);
  };

  const handleActive = inputId.includes('@') !== -1 && inputPw.length >= 5;

  const fetchFn = () => {
    fetch('api주소', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ userId: inputId, userPassword: inputPw }),
    }) //요청
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const navigateMain = () => {
    navigate('/ohMain');
  };

  return (
    <div className="outline-box">
      <div className="instagram-logo">westagram</div>
      <form id="login-form" onSubmitCapture={e => e.preventDefault()}>
        <input
          required
          className="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />
        <input
          required
          className="password"
          type="password"
          placeholder="비밀번호"
          onChange={handlePwInput}
        />

        <div className="btnBox">
          <button
            disabled={!handleActive}
            className={handleActive ? 'loginBtnOn' : 'loginBtn'}
            onClick={fetchFn}
            type="submit"
          >
            로그인
          </button>
        </div>
      </form>
      <a href="#" className="findPw">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
}

export default Login;
