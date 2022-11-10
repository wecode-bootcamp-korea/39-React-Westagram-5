import React, { useState, useNavigate } from 'react';
import CommentList from './CommentList';
import './KimMain.scss';

const Feed = props => {
  const { feed } = props;
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
    <div className="main">
      <div className="feeds">
        <div className="article">
          <div className="article_head">
            <img src={feed.name} className="wecode" />
            <a className="text">
              <b>{feed.name}</b>
            </a>
            <div className="dotdotdot">
              <a>
                <img src="/images/kimkunwoo/dot.png" />
              </a>
            </div>
          </div>

          <div className="article_pic">
            <img className="leo" src={feed.feedImg} />
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
              <b>{feed.name}</b> {feed.comment_text1}
            </p>
          </div>
          <div className="comment_wrapper">
            <div className="previous_comment">
              <p>
                <b>{feed.name}</b> {feed.comment_text2}
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
  );
};

export default Feed;
