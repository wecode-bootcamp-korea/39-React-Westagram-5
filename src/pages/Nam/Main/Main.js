import './Main.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewpoint" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Westagram</title>
      <nav className="nav-wrap">
        {/*상단 메뉴바*/}
        <div className="nav-left">
          <div className="camera-logo">
            <button class="camera-logo-2" type="text" />
          </div>
          <div className="westagram-logo">WeCodestagram</div>
        </div>
        <div class="nav-middle">
          <input class="search-bar" type="text" />
        </div>

        <div className="nav-right">
          <button class="compass-icon" />
          <button class="like-icon" />
          <button class="profile-icon" />
        </div>
      </nav>
      {/*상단 메뉴바 끝*/}
      {/*여기서부터 메인*/}
      <div className="main-wrap">
        <div className="feeds-wrap">
          <div className="aritlce-top">
            <header className="article-menu-left">
              <div className="personal-logo">
                <img src="/images/profile.jpg" className="profile-pic" />
              </div>
              <div className="location-id-wrap">
                <div className="personal-id">
                  <a href="#">wecode39_alice</a>
                </div>
                <div className="img-location">
                  <a href="#">Seolleung, Gangnam </a>
                </div>
              </div>
            </header>
            <div className="article-more">
              <button className="more-button">...</button>
            </div>
          </div>
          <div className="article-middle">
            <img
              src="./pictures/developer-weekend.jpg"
              alt="like-icon"
              className="feed-image"
            />
          </div>
          <div className="article-bottom">
            <div className="bottom-left-wrap">
              {/*버튼으로 수정*/}
              <button type="button" className="active-like give-like" />
              <div className="article-comment">
                <img
                  src="./icons/comment.png"
                  alt="comment icon"
                  className="leave-comment"
                />
              </div>
              <div className="artilce-share">
                <img
                  src="./icons/message.png"
                  alt="share icone"
                  className="share-content"
                />
              </div>
            </div>
            <div className="bottom-right-wrap">
              {/*버튼 참고*/}
              <button type="button" className="active-save save-content" />
            </div>
          </div>
        </div>
        <div className="side-wrap">
          <div className="side-top" />
          <div className="side-middle" />
          <div className="side-bottom" />
        </div>
      </div>
    </div>
  );
}

export default Main;
