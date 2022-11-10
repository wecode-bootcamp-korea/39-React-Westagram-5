import './NamMain.scss';
import React from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import profile from '/images/yeonwoonam/profile.jpg';
// import feedpic from './feed-picture.jpg';
import Footer from '../Footer';

function NamMain() {
  // console.log(localStorage.getItem('token'));

  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState([]);

  const handleClickBtn = () => {
    const pushedComments = [...commentList, commentInput];
    setCommentList(pushedComments); //...은 스프레드 오퍼레이터
    setCommentInput('');
  };
  console.log(commentInput);

  const saveCommentInput = event => {
    const newComment = event.target.value;
    setCommentInput(newComment);
  };

  const active = commentInput.length < 5;

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
            <button className="camera-logo-2" type="text" />
          </div>
          <div className="westagram-logo">WeCodestagram</div>
        </div>
        <div className="nav-middle">
          <input className="search-bar" type="text" />
        </div>

        <div className="nav-right">
          <button className="compass-icon" />
          <button className="like-icon" />
          <button className="profile-icon" />
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
                  alt="profile"
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
          <div className="liked-wrap">
            <img
              className="represent-liked"
              src="/images/yeonwoonam/profile.jpg"
              alt="profile"
            />
            <span className="liked-number">
              Liked by <b>wecode</b> and <b>132 others</b>
            </span>
          </div>
          <div className="all-comments">
            {commentList.map((comment, index) => (
              <div key={index} className="comments">
                <span className="nickname">wecoder</span>
                <span className="actCommentn">{comment}</span>
                <span className="material-symbol" />
              </div>
            ))}
          </div>
          <div className="new-comment">
            <input
              id="name"
              className="add-comment"
              type="text"
              placeholder="Add a comment..."
              onChange={saveCommentInput}
              value={commentInput}
            />
            <button
              type="button"
              className="post-button"
              id="submit"
              disabled={active}
              onClick={handleClickBtn}
            >
              Post
            </button>
          </div>
        </div>
        <div className="side-wrap">
          <div className="side-top" />
          <div className="side-middle" />
          <div className="side-bottom" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NamMain;
