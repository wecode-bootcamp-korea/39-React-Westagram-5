import React from 'react';

function Nav() {
  return (
    <div class="nav_container">
      <div class="nav_left">
        <i class="fab fa-instagram" />
        <div class="bar">|</div>
        <div class="instagram-logo">westagram</div>
      </div>

      <div class="search-container">
        <div class="search-bar">
          <i class="fas fa-search" />
          <input class="search-bar__input" type="search" placeholder="검색" />
        </div>
      </div>

      <div class="nav_right">
        <i class="far fa-compass fa-lg" />
        <i class="far fa-heart nav__icon fa-lg">
          <span class="heart_notification" />
        </i>
        <i class="far fa-user fa-lg" />
      </div>
    </div>
  );
}

export default Nav;
