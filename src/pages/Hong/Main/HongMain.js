import React, { useEffect, useState } from 'react';
import './HongMain.scss';
// import Nav from '../../../components/Nav/Nav';
import '../../../styles/mixin.scss';
import Comment from './comments';
import { Link_List } from './LinkData';
import { Link } from 'react-router-dom';

function HongMain() {
  const [input, inputValue] = useState('');
  const [inputBox, setInputBox] = useState([]);
  const [feedInfo, setFeedInfo] = useState([]);
  const saveInputValue = e => {
    inputValue(e.target.value);
  };

  const commentBox = () => {
    let inputArr = [...inputBox];
    inputArr.push(input);
    setInputBox(inputArr);
    inputValue('');
  };

  const enter = e => {
    if (e.code === 'Enter') {
      commentBox();
    }
  };
  /*
  function generateUserName() {
    let alphabet =
      'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890~!@#$^&-_';
    let randomname = '';
    for (let i = 0; i < 13; i++) {
      let index = Math.floor(Math.random(10) * alphabet.length);
      randomname += alphabet[index];
    }
    return randomname;
  }
*/

  // const commentPush = inputBox.map(function (input, com) {
  //   return (
  //     <div key={com} className="replyBox">
  //       <span>내이름</span>
  //       <span>{input}</span>
  //     </div>
  //   );
  // });

  const commentDel = com => () => {
    let delt = [...inputBox];
    delt.splice(com, 1);
    setInputBox(delt);
  };
  // const linkComp = () => {
  //   return (
  //     <div className="linkComp">
  //       <ul>
  //         {Link_List.map(link_List => {
  //           return <li key={link_List.id}>{link_List.linkName}</li>;
  //         })}
  //       </ul>
  //     </div>
  //   );
  // };

  useEffect(() => {
    fetch('/data/feedInfo.json')
      .then(response => response.json)
      .then(result => setFeedInfo(result));
  }, []);

  return (
    <>
      {/* <Nav /> */}
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
            <div className="article">
            {/* 안녕하세요 커밋용 한소리 */}
              {/* {feedInfo.map((feedList) => {
                return (
                <div className='articlebox_head'>
                  <div className='nuggetaccountpic'>{feedList.userpic}</div>
                  <div className='accountname'>{feedList.username}</div>
                  <img
                  alt="nugget"
                  src="images/hongseokhyun/menudots.png"
                  className="menudots"
                />
                </div>
                <div className='feedpic'>
                  <div>{feedList.feedpic}</div>
                </div>
                <div className='under_pic'>
                  <div className='sticker'>
                  <div className='left' key={feedList[underpic[id]]}>{feedList[underpic[heart]]}</div>
                  </div>
                </div>
                );
              })} */}
              <div className="articlebox_head">
                <img
                  alt="nugget"
                  src="images/hongseokhyun/nuggetaccount.png"
                  className="nuggetaccountpic"
                />
                <div className="accountname">jindodog_nuu_get</div>
                <img
                  alt="nugget"
                  src="images/hongseokhyun/menudots.png"
                  className="menudots"
                />
              </div>
              <div className="feedpic">
                <img
                  alt="nuggetpic"
                  src="images/hongseokhyun/nuggetbirth.jpg"
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
                  <div id="comments">
                    {/* {commentPush} */}
                    {inputBox.map(function (input, com) {
                      return (
                        <Comment
                          key={com}
                          input={input}
                          onDelete={commentDel(com)}
                        />
                      );
                    })}
                  </div>
                  <div className="fix">
                    <input
                      id="comment-input"
                      placeholder="댓글 달기.."
                      onChange={saveInputValue}
                      onKeyPress={enter}
                      value={input}
                    />
                    <button id="submit" onClick={commentBox}>
                      게시
                    </button>
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
