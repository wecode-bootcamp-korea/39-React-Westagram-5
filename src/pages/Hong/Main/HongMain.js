import React from 'react';
import './HongMain.scss';
import Nav from '../../../components/Nav/Nav';
import '../../../styles/variables.scss';

function HongMain() {
  return (
    <>
      <Nav />
      <header>
        <div className="nav">
          <div className="nav_left">
            <div className="crossline">
              <img
                src="images/hongseokhyun/instagram.png"
                className="left_logo"
                alt="instagram_logo"
              />
            </div>
            <p>westagram</p>
          </div>
          <div className="searcharea">
            <img alt="nugget" src="./images/hongseokhyun/magnifyingglass.png" />
            <input type="text" placeholder="검색" className="search" />
          </div>
          <div className="nav_right">
            <img
              alt="nugget"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              alt="nugget"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              alt="nugget"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </div>
      </header>
      <div className="main">
        <div className="main_box">
          <div className="feeds">
            <div className="article">
              <div className="articlebox_head">
                <img
                  alt="nugget"
                  src="images/hongseokhyun/nuggetaccount.png"
                  className="nuggetaccountpic"
                />
                <div className="accountname">jindodog_nuu_get</div>
                <img
                  alt="nugget"
                  src="../../asstes/hongseokhyun/menudots.png"
                  className="menudots"
                />
              </div>
              <div className="feedpic">
                <img
                  alt="nuggetpic"
                  src="../src/asstes/hongseokhyun/nuggetbirth.jpg"
                />
                <img alt="nuggetpic" src="images/hongseokhyun/nuggetface.jpg" />
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
                    댓글 <span id="count">0</span>개
                  </div>
                  <div id="comments"></div>
                  <div className="fix">
                    <input id="comment-input" placeholder="댓글 달기.." />
                    <button id="submit">게시</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main_right">
            <div className="nowaccount">
              <img
                alt="nugget"
                src="images/hongseokhyun/nuggetaccount.png"
                className="nownuggetaccountpic"
              />
              <div className="friends">
                <div className="friends_name">jindodog_nuu_get</div>
                <div className="friendsnow">너겟</div>
              </div>
              <span className="follow">전환</span>
            </div>
            <div className="pushfriendssmall">
              <div className="push">
                <span className="pushtoyou">스토리</span>
                <div className="seeAll">모두 보기</div>
              </div>
              <div className="pushfriends1">
                <div className="friendsaccount_box">
                  <div className="friendsaccount1">
                    <div className="storycolor">
                      <img
                        alt="nugget"
                        src="images/hongseokhyun/nuggetaccount.png"
                        className="nownuggetaccountpicpush"
                      />
                    </div>
                    <div className="friends1">
                      <div className="friends_name">corne._.e</div>
                      <div className="friendsnow">회원님을 팔로우합니다</div>
                    </div>
                  </div>
                  <div className="friendsaccount1">
                    <div className="storycolor">
                      <img
                        alt="nugget"
                        src="images/hongseokhyun/nuggetaccount.png"
                        className="nownuggetaccountpicpush"
                      />
                    </div>
                    <div className="friends1">
                      <div className="friends_name">corne._.e</div>
                      <div className="friendsnow">회원님을 팔로우합니다</div>
                    </div>
                  </div>
                  <div className="friendsaccount1">
                    <div className="storycolor">
                      <img
                        alt="nugget"
                        src="images/hongseokhyun/nuggetaccount.png"
                        className="nownuggetaccountpicpush"
                      />
                    </div>
                    <div className="friends1">
                      <div className="friends_name">corne._.e</div>
                      <div className="friendsnow">회원님을 팔로우합니다</div>
                    </div>
                  </div>
                  <div className="friendsaccount1">
                    <div className="storycolor">
                      <img
                        alt="nugget"
                        src="images/hongseokhyun/nuggetaccount.png"
                        className="nownuggetaccountpicpush"
                      />
                    </div>
                    <div className="friends1">
                      <div className="friends_name">corne._.e</div>
                      <div className="friendsnow">회원님을 팔로우합니다</div>
                    </div>
                  </div>
                  <div className="friendsaccount1">
                    <div className="storycolor">
                      <img
                        alt="nugget"
                        src="images/hongseokhyun/nuggetaccount.png"
                        className="nownuggetaccountpicpush"
                      />
                    </div>
                    <div className="friends1">
                      <div className="friends_name">corne._.e</div>
                      <div className="friendsnow">회원님을 팔로우합니다</div>
                    </div>
                  </div>
                  <div className="friendsaccount1">
                    <div className="storycolor">
                      <img
                        alt="nugget"
                        src="images/hongseokhyun/nuggetaccount.png"
                        className="nownuggetaccountpicpush"
                      />
                    </div>
                    <div className="friends1">
                      <div className="friends_name">corne._.e</div>
                      <div className="friendsnow">회원님을 팔로우합니다</div>
                    </div>
                  </div>
                  <div className="friendsaccount1">
                    <div className="storycolor">
                      <img
                        alt="nugget"
                        src="images/hongseokhyun/nuggetaccount.png"
                        className="nownuggetaccountpicpush"
                      />
                    </div>
                    <div className="friends1">
                      <div className="friends_name">corne._.e</div>
                      <div className="friendsnow">회원님을 팔로우합니다</div>
                    </div>
                  </div>
                  <div className="friendsaccount1">
                    <div className="storycolor">
                      <img
                        alt="nugget"
                        src="images/hongseokhyun/nuggetaccount.png"
                        className="nownuggetaccountpicpush"
                      />
                    </div>
                    <div className="friends1">
                      <div className="friends_name">corne._.e</div>
                      <div className="friendsnow">회원님을 팔로우합니다</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pushfriends">
              <div className="push">
                <span className="pushtoyou">회원님을 위한 추천</span>
                <div className="seeAll">모두 보기</div>
              </div>
              <div className="friendsaccount">
                <img
                  alt="nugget"
                  src="images/hongseokhyun/nuggetaccount.png"
                  className="nownuggetaccountpicpush"
                />
                <div className="friends">
                  <div className="friends_name">corne._.e</div>
                  <div className="friendsnow">회원님을 팔로우합니다</div>
                </div>
                <div className="follow">팔로우</div>
              </div>
              <div className="friendsaccount">
                <img
                  alt="nugget"
                  src="images/hongseokhyun/nuggetaccount.png"
                  className="nownuggetaccountpicpush"
                />
                <div className="friends">
                  <div className="friends_name">corne._.e</div>
                  <div className="friendsnow">회원님을 팔로우합니다</div>
                </div>
                <div className="follow">팔로우</div>
              </div>
              <div className="friendsaccount">
                <img
                  alt="nugget"
                  src="images/hongseokhyun/nuggetaccount.png"
                  className="nownuggetaccountpicpush"
                />
                <div className="friends">
                  <div className="friends_name">corne._.e</div>
                  <div className="friendsnow">회원님을 팔로우합니다</div>
                </div>
                <div className="follow">팔로우</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HongMain;
