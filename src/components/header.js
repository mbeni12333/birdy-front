import React from 'react';

const Header = () => {
  return(
    <header className="header">
      <div className="header__logo">
        <i class="fas fa-rocket"></i>
      </div>
      <div className="header__title">
        <h3 className>Profile</h3>
      </div>
      <div className="header__search">
        <div className="header__search-input">
          <input type="texte" placeholder="Search  stuff ..."/>
          <i class="fas fa-search search-icon"></i>
        </div>
        <div className="header__search-title">
          <h3>find friends</h3>
        </div>
      </div>
      <div className="header__icons">
        <div className="header__icons-block">
          <i class="fas fa-user-friends"></i>
        </div>
        <div className="header__icons-block">
          <i class="fas fa-comment-dots"></i>
        </div>
        <div className="header__icons-block">
          <i class="fas fa-globe"></i>
        </div>
      </div>
      <div className="header__profile">
        <div className="header__profile-icon">

        </div>
        <div className="header__profile-label">
        <h3>Mounib</h3>
        <i class="fas fa-caret-down"></i>
        </div>
      </div>
    </header>
  )
};

export default Header;
