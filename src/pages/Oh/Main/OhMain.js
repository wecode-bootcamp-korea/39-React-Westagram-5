import React, { useState } from 'react';
import './OhMain.scss';

function Main() {
  const [comments, setComments] = useState();

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <div className="container">
      <div className="nav_container">
        <div className="nav_left">
          <i className="fab fa-instagram" />
          <div className="bar">|</div>
          <div className="instagram-logo">westagram</div>
        </div>

        <div className="search-container">
          <div className="search-bar">
            <i className="fas fa-search" />
            <input
              className="search-bar__input"
              type="search"
              placeholder="검색"
            />
          </div>
        </div>

        <div className="nav_right">
          <i className="far fa-compass fa-lg" />
          <i className="far fa-heart nav__icon fa-lg">
            <span className="heart_notification" />
          </i>
          <i className="far fa-user fa-lg" />
        </div>
      </div>

      <section className="main_section">
        <div className="section_1">
          <div className="user">
            <img
              className="user__id__img"
              src="/images/ohjuhyung/snowman.jpeg"
            />
            <p className="user__id">juuh.yung</p>
          </div>
          <img
            className="cat__img"
            alt="cat"
            src="/images/ohjuhyung/cat.jpeg"
          />

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
              <ul className="comments__list" />

              <div className="write">
                <div className="inner">
                  <i className="fa-regular fa-face-smile" />

                  <form onsubmit="return false" className="comment__form">
                    <input
                      className="write__input"
                      placeholder="Add a comment..."
                    />
                    <button className="post">post</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_2">
          <div className="my__id__box">
            <img className="my__id" src="/images/ohjuhyung/snowman.jpeg" />
            <p className="my__id__name">juuh.yung</p>
          </div>

          <div className="story__box">
            <div className="story__box__top">
              <p className="story">story</p>
              <p className="story__see__all">See All</p>
            </div>
            <div className="story_profile">
              <div className="story1__box">
                <div className="story1__border">
                  <img className="story1" src=" /images/ohjuhyung/puppy.jpeg" />
                </div>
                <div className="story1__border__info">
                  <p className="story1__border__id">niceflim</p>
                  <p className="story1__time">16분 전</p>
                </div>
              </div>

              <div className="story2__box">
                <div className="story2__border">
                  <img className="story2" src=" /images/ohjuhyung/puppy.jpeg" />
                </div>
                <div className="story2__border__info">
                  <p className="story2__border__id">niceflim</p>
                  <p className="story2__time">16분 전</p>
                </div>
              </div>

              <div className="story3__box">
                <div className="story3__border">
                  <img className="story3" src=" /images/ohjuhyung/puppy.jpeg" />
                </div>
                <div className="" story3__border__info>
                  <p className="story3__border__id">niceflim</p>
                  <p className="story3__time">16분 전</p>
                </div>
              </div>

              <div className="story4__box">
                <div className="story4__border">
                  <img className="story4" src=" /images/ohjuhyung/puppy.jpeg" />
                </div>
                <div className="story4__border__info">
                  <p className="story4__border__id">niceflim</p>
                  <p className="story4__time">16분 전</p>
                </div>
              </div>
            </div>
          </div>

          <div className="suggestion__box">
            <div className="suggestion__box__top">
              <p className="suggestion">suggestion</p>
              <p className="suggestion__see__all">See All</p>
            </div>

            <div className="suggestion__profile">
              <div className="flower__box">
                <div className="flower__border">
                  <img className="flower" src="/images/ohjuhyung/puppy.jpeg" />
                </div>
                <div className="flower__border__info">
                  <p className="flower__border__id">ppp_p.2.2</p>
                  <p className="flower__suggested__for__you">
                    suggested for you
                  </p>
                </div>
                <div className="flower__follow">Follow</div>
              </div>

              <div className="macaron__box">
                <div className="macaron__border">
                  <img className="macaron" src="/images/ohjuhyung/puppy.jpeg" />
                </div>
                <div className="macaron__border__info">
                  <p className="macaron__border__id">a.a__</p>
                  <p className="macaron__suggested__for__you">
                    suggested for you
                  </p>
                </div>
                <div className="macaron__follow">Follow</div>
              </div>

              <div className="puppy__box">
                <div className="puppy__border">
                  <img className="puppy" src="/images/ohjuhyung/puppy.jpeg" />
                </div>
                <div className="puppy__border__info">
                  <p className="puppy__border__id">three_balls</p>
                  <p className="puppy__suggested__for__you">
                    suggested for you
                  </p>
                </div>
                <div className="puppy__follow">Follow</div>
              </div>
            </div>
          </div>

          <p className="info">About·Help·Press·API·Jobs·Privacy·Terms·</p>
          <p className="info2">Location·Language</p>

          <p className="copyright">ⓒ 2022 INSTAGRAM FROM META</p>
        </div>
      </section>
    </div>
  );
}

export default Main;
