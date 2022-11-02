import './NamMain.scss';
import React from 'react';
// import { Link } from 'react-router-dom';
// import profile from '/images/yeonwoonam/profile.jpg';
// import feedpic from './feed-picture.jpg';

function NamMain() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewpoint" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Westagram</title>
      <nav className="nav-wrap">
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
      {/*여기서부터 메인*/}
      <div className="main-wrap">
        <div className="feeds-wrap">
          <div className="aritlce-top">
            <header className="article-menu-left">
              <div className="personal-logo">
                <img
                  src="/images/yeonwoonam/profile.jpg"
                  alt='"profile"'
                  className="profile-pic"
                />
              </div>
              <div className="location-id-wrap">
                <div className="personal-id">
                  <a href="https://www.instagram.com/makingshit/">
                    wecode39_alice
                  </a>
                </div>
                <div className="img-location">
                  <a href="https://naver.me/G8tW4kl4">Seolleung, Gangnam </a>
                </div>
              </div>
            </header>
            <div className="article-more">
              <button className="more-button">...</button>
            </div>
          </div>
          <div className="article-middle">
            <img
              src="/images/yeonwoonam/feed-picture.jpg"
              alt="like-icon"
              className="feed-image"
            />
          </div>
          <div className="article-bottom">
            <div className="bottom-left-wrap">
              <button type="button" className="active-like give-like" />
              <button type="button" className="leave-comment" />
              <button type="button" className="share-content" />
            </div>
            <div className="bottom-right-wrap">
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

export default NamMain;
