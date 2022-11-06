import React from 'react';

const CommentList = ({ comment }) => {
  return (
    <li id="commentLists">
      <span className="pClass">kunwoooo </span>
      <span> {comment}</span>
    </li>
  );
};

export default CommentList;
