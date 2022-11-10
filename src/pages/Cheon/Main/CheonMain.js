import '../../../styles/reset.scss';
import '../Main/CheonMain.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import Feed from './Feed';
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Main />);
import React from 'react';
function CheonMain() {
  const [feedList, setFeedList] = useState([]);
  useEffect(() => {
    fetch('/data/userInfoList.json', { method: 'GET' })
      .then(response => response.json())
      .then(result => {
        setFeedList(result);
      });
  }, []);
  return (
    <>
      <header className="headerContainer">
        <div className="headerBox">
          <a>
            <i className="fab fa-instagram" />
            <span>Westagram</span>
          </a>
          <div className="headerSearchBox">
            <i className="fas fa-search" />
            <input type="text" placeholder="검색" />
          </div>
          <nav className="headerRightImage">
            <a>
              <i className="far fa-compass" />
            </a>
            <a>
              <i className="far fa-heart" />
            </a>
            <a>
              <i className="far fa-user" />
            </a>
          </nav>
        </div>
      </header>
      <div className="body1">
        <article>
          {feedList.map(feed => (
            <Feed key={feed.id} feed={feed} />
          ))}
        </article>
        <aside>
          <div className="asideHead">
            <img
              src="/images/cheonjeonghwan/IMG:h11.jpeg"
              width="53px"
              height="53px"
            />
            <div className="asideHeadText">
              <p>jeonghwan</p>
              <p>jeonghwan | 위스타그램</p>
            </div>
          </div>
          <div className="asideBody">
            <div className="asideBodyStory">
              <span>스토리</span>
              <p>모두 보기</p>
            </div>
            <div className="asideBodyImgId">
              <div className="asidehi">
                <img
                  src="/images/cheonjeonghwan/img:h13.png"
                  width="32px"
                  height="32px"
                />
                <div className="asidehi2">
                  <span>wecode38기</span>
                  <p>13분 전</p>
                </div>
              </div>
              <div className="asidehi">
                <img
                  src="/images/cheonjeonghwan/img:h13.png"
                  width="32px"
                  height="32px"
                />
                <div className="asidehi2">
                  <span>wecode39기</span>
                  <p>39분 전</p>
                </div>
              </div>
              <div className="asidehi">
                <img
                  src="/images/cheonjeonghwan/img:h13.png"
                  width="32px"
                  height="32px"
                />
                <div className="asidehi2">
                  <span>wecode40기</span>
                  <p>1시간 전</p>
                </div>
              </div>
              <div className="asidehi">
                <img
                  src="/images/cheonjeonghwan/img:h13.png"
                  width="32px"
                  height="32px"
                />
                <div className="asidehi2">
                  <span>wecode41기</span>
                  <p>1시간 전</p>
                </div>
              </div>
            </div>
          </div>
          <div className="asideBody">
            <div className="asideBodyStory">
              <span>회원님을 위한 추천</span>
              <p>모두 보기</p>
            </div>
            <div className="asideBodyImgId">
              <div className="asidehi">
                <img
                  src="/images/cheonjeonghwan/IMG:h11.jpeg"
                  width="32px"
                  height="32px"
                />
                <div className="asidehi2">
                  <span>joenghwan92</span>
                  <p>wecode38기님 외 2명이...</p>
                </div>
                <button type="button">팔로우</button>
              </div>
              <div className="asidehi">
                <img
                  src="/images/cheonjeonghwan/IMG:h11.jpeg"
                  width="32px"
                  height="32px"
                />
                <div className="asidehi2">
                  <span>cheonjeong</span>
                  <p>wecode39기님 외 7명이...</p>
                </div>
                <button type="button">팔로우</button>
              </div>
              <div className="asidehi">
                <img
                  src="/images/cheonjeonghwan/IMG:h11.jpeg"
                  width="32px"
                  height="32px"
                />
                <div className="asidehi2">
                  <span>jeonghwan39</span>
                  <p>wecode40기님 외 5명이...</p>
                </div>
                <button type="button">팔로우</button>
              </div>
            </div>
          </div>
          <footer>
            <ul className="asideDown">
              {FOOTER_INFO_LIST.map(infoIndex => (
                <li key={infoIndex.id}>
                  <a href={infoIndex.link}>{infoIndex.text}</a>
                </li>
              ))}
            </ul>
          </footer>
          <div className="pInput">
            <p>@2019 INSTARGRAM</p>
          </div>
        </aside>
      </div>
    </>
  );
}
export default CheonMain;

const FOOTER_INFO_LIST = [
  { id: 1, link: 'https://about.meta.com/', text: 'Meta' },
  { id: 2, link: 'https://about.instagram.com/', text: '소개' },
  { id: 3, link: 'https://about.instagram.com/blog', text: '블로그' },
  {
    id: 4,
    link: 'https://about.instagram.com/about-us/careers',
    text: '채용 정보',
  },
  { id: 5, link: 'https://help.instagram.com/', text: '도움말' },
  {
    id: 6,
    link: 'https://developers.facebook.com/docs/instagram',
    text: 'API',
  },
  {
    id: 7,
    link: 'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect',
    text: '개인정보처리방침',
  },
  { id: 8, link: 'https://help.instagram.com/581066165581870/', text: '약관' },
  {
    id: 9,
    link: 'https://www.instagram.com/directory/profiles/',
    text: '인기 계정',
  },
  {
    id: 10,
    link: 'https://www.instagram.com/directory/hashtags/',
    text: '해시태그',
  },
  {
    id: 11,
    link: 'https://www.instagram.com/explore/locations/',
    text: '위치',
  },
  {
    id: 12,
    link: 'https://www.instagram.com/web/lite/',
    text: 'Instargram Life',
  },
  {
    id: 13,
    link: 'https://www.facebook.com/help/instagram/261704639352628',
    text: '연락처 업로드 & 비사용자',
  },
];
