import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import CommentList from './CommentList';
import Footer from './\bFooter';
import Feed from './Feed';
import './KimMain.scss';

const KimMain = () => {
  const [feedDataList, setFeedDataList] = useState([]);
  const navi = useNavigate();
  const click = e => {
    navi('./');
  };

  useEffect(() => {
    fetch('/data/FeedDataList.json')
      .then(response => response.json())
      .then(result => setFeedDataList(result));
  }, []);

  return (
    <>
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
          {feedDataList.map((feed, index) => (
            <Feed key={index} feed={feed} />
          ))}

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
      </div>
    </>
  );
};

export default KimMain;
