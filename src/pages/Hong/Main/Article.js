import React from 'react';
import { useState } from 'react';
import Comment from './Comments';

const Article = ({ feedlist }) => {
  const [input, inputValue] = useState('');
  const [inputBox, setInputBox] = useState([]);

  const saveInputValue = e => {
    inputValue(e.target.value);
  };

  const commentBox = () => {
    let inputArr = [...inputBox];
    inputArr.push(input);
    setInputBox(inputArr);
    inputValue('');
  };

  const enter = e => {
    if (e.code === 'Enter' && e.nativeEvent.isComposing === false) {
      commentBox();
    }
  };

  const commentDel = com => () => {
    let delt = [...inputBox];
    delt.splice(com, 1);
    setInputBox(delt);
  };

  return (
    <div className="article">
      <div className="articlebox_head">
        <img alt="nugget" src={feedlist.userpic} className="nuggetaccountpic" />
        <div className="accountname">{feedlist.username}</div>
        <img
          alt="nugget"
          src="images/hongseokhyun/menudots.png"
          className="menudots"
        />
      </div>
      <div className="feedpic">
        <img alt="nuggetpic" src={feedlist.feedpic} />
      </div>

      <div className="under_pic">
        <div className="sticker">
          <img
            alt="nugget"
            src="images/hongseokhyun/heart.png"
            className="left"
          />
          <img
            alt="nugget"
            src="images/hongseokhyun/chat.png"
            className="left"
          />
          <img
            alt="nugget"
            src="images/hongseokhyun/send.png"
            className="left"
          />
        </div>
        <div className="save">
          <img
            alt="nugget"
            src="images/hongseokhyun/bookmark-white.png"
            className="left"
          />
        </div>
      </div>
      <div className="position">
        <div id="form-commentInfo">
          <div id="comment-count">
            {feedlist.username} <span id="count">{feedlist.comment}</span>
          </div>
          <div id="comments">
            {inputBox.map(function (input, com) {
              return (
                <Comment key={com} input={input} onDelete={commentDel(com)} />
              );
            })}
          </div>
          <div className="fix">
            <input
              id="comment-input"
              placeholder="댓글 달기.."
              onChange={saveInputValue}
              onKeyDown={enter}
              value={input}
            />
            <button id="submit" onClick={commentBox}>
              게시
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
