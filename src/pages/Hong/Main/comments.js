// import React, { useState } from 'react';

const Comment = ({ input, onDelete }) => {
  return (
    <div className="replyBox">
      <span>내이름</span>
      {input}
      <img
        onClick={onDelete}
        src="/images/hongseokhyun/delete.png"
        alt="delete"
        className="delete"
      />
    </div>
  );
};

export default Comment;
