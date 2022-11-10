import React, { useState } from 'react';

const Feed = props => {
  const { feed } = props;
  const [commentInput, setCommnentInput] = useState('');
  const [commentList, setCommentList] = useState([]);
  const active = commentInput.length > 0;

  const saveCommentInput = event => {
    setCommnentInput(event.target.value);
  };

  const handleClickBtn = () => {
    const pushedCommnents = [...commentList, commentInput];
    setCommentList(pushedCommnents);
    setCommnentInput('');
  };

  return (
    <div>
      <div className="feedHeader">
        <img src={feed.userImg} alt="id Photo" width="32px" height="32px" />
        <span>{feed.user}</span>
        <a href="">
          <i className="fas fa-ellipsis-h" />
        </a>
      </div>
      <div className="feedImage">
        <img src={feed.feedImg} alt="main Photo" width="614px" height="614px" />
      </div>
      <div className="feedReactionButton">
        <div className="reactionButton1">
          <button>
            <i className="fas fa-heart" />
          </button>
          <button>
            <i className="far fa-comment" />
          </button>
          <button>
            <i className="fa fa-upload" />
          </button>
        </div>
        <div className="reactionButton2">
          <button>
            <i className="far fa-bookmark" />
          </button>
        </div>
      </div>
      <div className="feedReaction">
        <div className="ReactionImage">
          <img
            src="/images/cheonjeonghwan/img:h13.png"
            width="25px"
            height="25px"
          />
          <span>wecode님 외 100명이 좋아합니다.</span>
        </div>

        <div className="reactionSentence">
          <div className="surfSentence">
            <span>wecode39기 할로윈데이~~ 형진님 너무 멋...</span>
          </div>
          <div className="moreView">
            <a href="">더 보기</a>
          </div>
        </div>
        <div className="surfSentence1">
          <span>wecode40기 위워크에서 할로윈데이 너무 부러워요.😎</span>
        </div>
        {commentList.map((comment, index) => {
          return (
            <div className="surfSentence1" key={index}>
              <span className="nickname">CheonJeong</span>
              <span className="material-symbols-outlined icon gray comment-heart">
                {comment}
              </span>
              <button className="buttonHeart">
                <i className="far fa-heart" />
              </button>
            </div>
          );
        })}
        <div className="surfSentence2">
          <p>45분전</p>
        </div>
        <div className="feedCommentContainer">
          <input
            className="feedComment"
            type="text"
            placeholder="댓글 달기..."
            value={commentInput}
            onChange={saveCommentInput}
          />
          <button
            className='"comment-btn'
            disabled={!active}
            onClick={handleClickBtn}
          >
            게시
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
