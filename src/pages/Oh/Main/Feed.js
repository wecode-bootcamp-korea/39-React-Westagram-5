import { useState } from 'react';
import Comments from './Comments';

const Feed = ({ feed }) => {
  const [comments, setComments] = useState('');
  const [addComments, setAddComments] = useState([]);
  const btnActive = comments.length > 0;

  const inputValue = event => {
    setComments(event.target.value);
  };

  const buttonClick = () => {
    setAddComments([...addComments, comments]); // 새로운 배열로 교체
    setComments('');
  };

  const removeComments = event => {
    const filtered = addComments.filter(
      (el, i) => i !== Number(event.target.id)
    );
    //우리가 클릭한 것의 아이디를 가지고 있는 배열을 제외한 배열을 구성 후 그것을 SET함수의 인자로 넣으면 됨
    setAddComments(filtered);
  };

  return (
    <div className="feedContainer">
      <div className="feedBox">
        <div className="user">
          <img className="user__id__img" src={feed.userImg} />
          <p className="user__id">juuh.yung</p>
        </div>
        <img className="cat__img" alt="cat" src={feed.userPhoto} />

        <div className="bottombox">
          <div className="bottombox__icons">
            <div className="bottombox__icons__left">
              <i className="far fa-heart fa-lg" />
              <i className="far fa-comment fa-lg" />
              <i className="fa-regular fa-share-from-square fa-lg" />
            </div>
            <div className="bottombox__icons__right">
              <i className="far fa-bookmark fa-lg" />
            </div>
          </div>
          <div className="bottombox__likes">
            <div className="bottombox__likes__first">
              <img
                className="meerrock__img"
                src="/images/ohjuhyung/meerrock.jpeg"
              />
              <p className="bottombox__likes__second">Liked by</p>
              <p className="bottombox__likes__id">meerrock</p>
              <p className="bottombox__likes__thrid">and</p>
              <p className="bottombox__likes__fourth">300 others</p>
            </div>
            <div className="contents">
              <div className="contents__id">juuh.yung</div>
              <div className="contents__content">고냥이</div>
            </div>
            <div className="comments">
              <div className="comments__id">meerrock</div>
              <div className="comments__content">망고스티이이인~ 나줘!</div>
            </div>
            <div className="time">1 HOUR AGO</div>
            <ul className="comments__list">
              {addComments.map((comment, index) => (
                <Comments
                  id={index}
                  key={index}
                  commentValue={comment}
                  removeComments={removeComments}
                />
              ))}
            </ul>

            <div className="write">
              <div className="inner">
                <i className="fa-regular fa-face-smile" />

                <form
                  className="comment__form"
                  onSubmit={event => {
                    event.preventDefault();
                  }}
                >
                  <input
                    className="write__input"
                    value={comments}
                    placeholder="Add a comment..."
                    onChange={inputValue}
                  />
                  <button
                    className={btnActive ? 'postOn' : 'post'}
                    disabled={!btnActive}
                    onClick={buttonClick}
                  >
                    post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
