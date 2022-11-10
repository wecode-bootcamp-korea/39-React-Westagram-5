import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import CommentList from './CommentList';
import Footer from './\bFooter';
import './KimMain.scss';

const KimMain = () => {
  const navi = useNavigate();
  const click = e => {
    navi('./');
  };
  const [comment, setComment] = useState('');
  const handleCommentInput = event => {
    setComment(event.target.value);
  };
  const [commentArray, setCommentArray] = useState([]);
  const onSubmit = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray([...commentArray, comment]);
    setComment('');
  };
  const pressEnter = event => {
    if (event.code === 'Enter') {
      event.preventDefault();
      if (comment === '') {
        return;
      }
      setCommentArray([...commentArray, comment]);
      setComment('');
    }
  };
  return (
    <div className="main_all">
      <div className="nav">
        <div className="logoMain">
          <img
            onClick={click}
            src="/images/kimkunwoo/insta.png"
            className="insta"
            alt="westa"
          />
          <h1 className="logo">westagram</h1>
        </div>
        <div className="searchbar">
          <input type="text" placeholder="검색" />
        </div>
        <div className="imgTop">
          <a>
            <img
              className="explore"
              src="/images/kimkunwoo/explore.png"
              alt="explore"
            />
          </a>
          <a>
            <img className="heart" src="/images/kimkunwoo/heart.png" />
          </a>
          <a>
            <img className="profile" src="/images/kimkunwoo/profile.png" />
          </a>
        </div>
      </div>
      <div className="main">
        <div className="feeds">
          <div className="article">
            <div className="article_head">
              <img src="/images/kimkunwoo/me.png" className="wecode" />
              <a className="text">
                <b>kunwoooo</b>
              </a>
              <div className="dotdotdot">
                <a>
                  <img src="/images/kimkunwoo/dot.png" />
                </a>
              </div>
            </div>

            <div className="article_pic">
              <img className="leo" src="/images/kimkunwoo/leo.jpeg" />
            </div>
            <div className="emo">
              <img className="r_heart" src="/images/kimkunwoo/heart.png" />
              <img className="comment_C" src="/images/kimkunwoo/comment.png" />
              <img className="share" src="/images/kimkunwoo/message.png" />
              <img className="scrap" src="/images/kimkunwoo/bookmark.png" />
            </div>
            <div className="like">
              <img className="wecode_w" src="/images/kimkunwoo/wecode.png" />
              <a className="like_re">
                <b>wecode</b>님 외 10명이 좋아합니다
              </a>
            </div>
            <div className="comment_name">
              <p className="pclassName">
                <b>kunwoooo</b> 레오
              </p>
            </div>
            <div className="comment_wrapper">
              <div className="previous_comment">
                <p>
                  <b>keke:</b> 레오레오
                </p>
                <img
                  className="comment_likebutton"
                  alt=""
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                />
              </div>
            </div>
          </div>
          <ul>
            {commentArray.map((comment, index, button) => (
              <CommentList
                key={index}
                comment={comment}
                button1={button}
                button2={button}
              />
            ))}
          </ul>
          <div className="time">
            <a className="small">42분 전</a>
          </div>
          <div className="new_comment">
            <input
              onChange={handleCommentInput}
              value={comment}
              onKeyPress={pressEnter}
              id="name"
              className="write_newComment"
              type="text"
              placeholder="댓글 달기..."
            />
            <button
              type="button"
              onClick={onSubmit}
              className="upload_button"
              id="submit"
            >
              게시
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right_1">
          <img src="/images/kimkunwoo/wecode.png" className="wecode" />
          <a className="text_t">
            <b>wecode_bootcamp</b>
            <br />
            <span className="small">WeCode | 위코드</span>
          </a>
        </div>
        <div className="right_2">
          <div className="right_2_head">
            <a className="hmain">스토리</a>
            <a className="allSee">모두 보기</a>
          </div>
          <div className="right_2_main">
            <div className="rmain">
              <img src="/images/kimkunwoo/wecode.png" className="wecode" />
              <div className="right_2_text">
                <a className="text_t">
                  <b>wecode_39</b>
                  <br />
                  <span className="small">
                    <b>16분 전</b>
                  </span>
                </a>
                <div className="follow">
                  <a className="follow">팔로우</a>
                </div>
              </div>
            </div>
            <div className="rmain">
              <img src="/images/kimkunwoo/any1.png" className="wecode" />
              <div className="right_2_text">
                <a className="text_t">
                  <b>front_end</b>
                  <br />
                  <span className="small">
                    <b>3시간 전</b>
                  </span>
                </a>
                <a className="follow">팔로우</a>
              </div>
            </div>
            <div className="rmain">
              <img src="/images/kimkunwoo/me.png" className="wecode" />
              <div className="right_2_text">
                <a className="text_t">
                  <b>kunwoo_Kim</b>
                  <br />
                  <span className="small">
                    <b>20시간 전</b>
                  </span>
                </a>
                <a className="follow">팔로우</a>
              </div>
            </div>
          </div>
        </div>
        <div className="right_3">
          <div className="right_2_head">
            <a className="hmain">회원님을 위한 추천</a>
            <a className="allSee">모두 보기</a>
          </div>
          <div className="right_2_main">
            <div className="rmain">
              <img src="/images/kimkunwoo/any2.png" className="wecode" />
              <div className="right_2_text">
                <a>
                  <b>kkwekdf</b>
                  <br />
                  <span className="small">
                    <b>legend_님 외 2명이 ...</b>
                  </span>
                </a>
                <a className="follow">팔로우</a>
              </div>
            </div>
            <div className="rmain">
              <img src="/images/kimkunwoo/any3.png" className="wecode" />
              <div className="right_2_text">
                <a>
                  <b>supreme_korea</b>
                  <br />
                  <span className="small">
                    <b>gunwoo님 외 2명이 ...</b>
                  </span>
                </a>
                <a className="follow">팔로우</a>
              </div>
            </div>
            <div className="rmain">
              <img
                src="/images/kimkunwoo/wecode.png"
                alt="wecode"
                className="wecode"
              />
              <div className="right_2_text">
                <a>
                  <b>wecode_bootcamp</b>
                  <br />
                  <span className="small">
                    <b>wecode님 외 2명이 ...</b>
                  </span>
                </a>
                <a className="follow">팔로우</a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default KimMain;
