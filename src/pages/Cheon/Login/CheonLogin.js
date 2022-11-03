import React from 'react';
import "../Login/CheonLogin.scss"
import "../../../styles/reset.scss"
function Login() {

  return (
          <>
          <div className="loginform">
              <header>westargram</header>
              <form>
                  <input type="text" name="email" className="text-file" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                      <input type="text" name="email" className="text-file" placeholder="비밀번호"/>
                          <input type="push" value="로그인" className="push-btn"/>
                          <p>비밀번호를 잊으셨나요?</p>
                          </form>

                      </div>

                      
            
              
              </>
              )
}

export default CheonLogin;
