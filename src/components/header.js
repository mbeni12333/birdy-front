import React from 'react';

const Header = () => {
  return(
    <header className="header">
      <div className="header__logo">
        <i className="fas fa-rocket"></i>
      </div>
      <div className="header__title">
        <h3 className="header__title-text">Profile</h3>
      </div>
      <div className="header__search">
        <div className="header__search-input">
          <input type="texte" placeholder="Search  stuff ..."/>
          <i className="fas fa-search search-icon"></i>
        </div>
        <div className="header__search-title">
          <h3>find friends</h3>
        </div>
      </div>
      <div className="header__icons">
        <div className="header__icons-block">
          <i className="fas fa-user-friends"></i>
        </div>
        <div className="header__icons-block">
          <i className="fas fa-comment-dots"></i>
        </div>
        <div className="header__icons-block">
          <i className="fas fa-globe"></i>
        </div>
      </div>
      <div className="header__profile">
        <div className="header__profile-icon">

        </div>
        <div className="header__profile-label">
        <h3>Mounib</h3>
        <i className="fas fa-caret-down"></i>
        </div>
      </div>
    </header>
  )
};

export default Header;
