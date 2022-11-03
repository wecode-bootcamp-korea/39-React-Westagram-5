import './OhLogin.scss';

function Login() {
  return (
    <div className="outline-box">
      <div className="instagram-logo">westagram</div>
      <form id="login-form">
        <input
          required
          className="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          required
          className="password"
          type="password"
          placeholder="비밀번호"
        />
      </form>
      <div className="btnBox">
        <button disabled className="loginBtn">
          로그인
        </button>
      </div>
      <a className="findPw">비밀번호를 잊으셨나요?</a>
    </div>
  );
}

export default Login;
