import './HongMain.scss';

import '../../../styles/mixin.scss';

import { Link_List } from './LinkData';

import ArticleList from './ArticleList';

function HongMain() {
  return (
    <>
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
            <img alt="nugget" src="images/hongseokhyun/magnifying-glass.png" />
            <input type="text" placeholder="검색" className="search" />
          </div>
          <div className="nav_right">
            <img alt="nugget" src="images/hongseokhyun/explore.png" />
            <img alt="nugget" src="images/hongseokhyun/heart.png" />
            <img alt="nugget" src="images/hongseokhyun/profile.png" />
          </div>
        </div>
      </header>
      <div className="main">
        <div className="main_box">
          <div className="feeds">
            <ArticleList />
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
            <div className="linkComp">
              <ul>
                {Link_List.map(link_List => {
                  return (
                    <li key={link_List.id}>
                      <a href={link_List.link}>{link_List.linkName}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HongMain;
