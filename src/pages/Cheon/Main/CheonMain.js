import "../Main/CheonMain.scss";
import "../../../styles/reset.scss"
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Main />);
function Main(){
    return (
        <>
    <header className="headerContainer">
        <div className="headerBox">
            <a><i className="fab fa-instagram"></i><span>Westagram</span></a>
            <div className="headerSearchBox">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="검색"/>
            </div>
            <nav className="headerRightImage">
                <a><i className="far fa-compass"></i></a>
                <a><i className="far fa-heart"></i></a>
                <a><i className="far fa-user"></i></a>
            </nav>
        </div>
    </header>
    <div className="body1">
        <article>
            <div className="feedHeader">
                <img src="../../images/IMG:h11.jpeg" alt="id Photo" width="32px" height="32px" />
                <span>jeonghwan</span>
                <a href=""><i className="fas fa-ellipsis-h"></i></a>
            </div>
            <div className="feedImage">
                <img src="../../images/IMG_2970.jpg" alt="main Photo" width="614px" height="614px"/>
            </div>
            <div className="feedReactionButton">
                <div className="reactionButton1">
                    <button><i className="fas fa-heart"></i></button>
                    <button><i className="far fa-comment"></i></button>
                    <button><i className="fa fa-upload"></i></button>
                </div>
                <div className="reactionButton2">
                    <button><i className="far fa-bookmark"></i></button>
                </div>
            </div>
            <div className="feedReaction">
                <div className="ReactionImage">
                    <img src="../../images/img:h13.png" width="25px" height="25px" />
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
                    <button className="buttonHeart"><i className="far fa-heart"></i></button>
                </div>
                <div className="surfSentence2">
                    <p>45분전</p>
                </div>
                <div className="feedCommentContainer">
                    <input className="feedComment" type="text" placeholder="댓글 달기..."/>
                    <button>게시</button>
                </div>
            </div>
        </article>
        <aside>
            <div className="asideHead">
                <img src="../../images/IMG:h11.jpeg" width="53px" height="53px"/>
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
                        <img src="../../images/img:h13.png" width="32px" height="32px"/>
                        <div className="asidehi2">
                            <span>wecode38기</span>
                            <p>13분 전</p>
                        </div>
                    </div>
                    <div className="asidehi">
                        <img src="../../images/img:h13.png" width="32px" height="32px"/>
                        <div className="asidehi2">
                            <span>wecode39기</span>
                            <p>39분 전</p>
                        </div>
                    </div>
                    <div className="asidehi">
                        <img src="../../images/img:h13.png" width="32px" height="32px"/>
                        <div className="asidehi2">
                            <span>wecode40기</span>
                            <p>1시간 전</p>
                        </div>
                    </div>
                    <div className="asidehi">
                        <img src="../../images/img:h13.png" width="32px" height="32px"/>
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
                        <img src="../../images/IMG:h11.jpeg" width="32px" height="32px"/>
                        <div className="asidehi2">
                            <span>joenghwan92</span>
                            <p>wecode38기님 외 2명이...</p>
                        </div>
                        <button type="button">팔로우</button>
                    </div>
                    <div className="asidehi">
                        <img src="../../images/IMG:h11.jpeg" width="32px" height="32px"/>
                        <div className="asidehi2">
                            <span>cheonjeong</span>
                            <p>wecode39기님 외 7명이...</p>
                        </div>
                        <button type="button">팔로우</button>
                    </div>
                    <div className="asidehi">
                        <img src="../../images/IMG:h11.jpeg" width="32px" height="32px"/>
                        <div className="asidehi2">
                            <span>jeonghwan39</span>
                            <p>wecode40기님 외 5명이...</p>
                        </div>
                        <button type="button">팔로우</button>
                    </div>
                </div>
            </div>
            <div className="asideDown">
                <span>instargram 정보 . 지원 . 홍보 센터 . API .</span>
                <span>채용 정보 . 개인정보처리방침 . 약관 .</span>
                <span>디렉터리 . 프로필 . 해시태그 . 언어</span>
                <p>@2019 INSTARGRAM</p>
            </div>
        </aside>
    </div>
        </>
    )
}
export default CheonMain;