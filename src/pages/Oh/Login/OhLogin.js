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

  const handleActive = inputId.indexOf('@') !== -1 && inputPw.length >= 5;

  const fetchFn = () => {
    fetch('http://10.58.52.230:3008/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: inputId, password: inputPw }),
    }) //요청
      .then(response => {
        console.log(response);
        if (response.status != 200) {
          throw new Error('error');
          alert('로그인 실패');
        }

        return response.json();
      })
      .catch(err => {
        console.log(err);
        alert('로그인 실패');
      })
      .then(data => {
        console.log(data);
        localStorage.setItem('token', data.accessToken);
        navigate('/ohMain');
        // idPwValid();
      });
  };

  // const navigateMain = () => {
  //   navigate('/ohMain');
  // };

  // const idPwValid = () => {
  //   inputId === 'rivejunee@naver.com' && inputPw === 'riverjune112'
  //     ? navigate('/ohMain')
  //     : alert('아이디나 비밀번호를 확인하세요!');
  // };

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
