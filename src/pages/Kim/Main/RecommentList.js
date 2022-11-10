import React from 'react';

const RecommentList = () => {
  return (
    <>
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
    </>
  );
};

export default RecommentList;
