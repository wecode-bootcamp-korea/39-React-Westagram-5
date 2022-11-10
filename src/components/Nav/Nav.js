import React from 'react';

function Nav() {
  return (
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
  );
}

export default Nav;
