import React from 'react';
import './CommentList.scss';

const CommentList = ({ comment, button }) => {
  return (
    <li id="commentLists">
      <span className="pClass">kunwoooo </span>
      <span> {comment}</span>
      <button className="likebutton"></button>
      <button className="btn">삭제</button>
    </li>
  );
};

export default CommentList;
