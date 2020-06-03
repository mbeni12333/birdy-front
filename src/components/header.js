import React from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Field from './field.js';


const toggleNav = () => {
  let nav = document.getElementById("mainNavigation");
  nav.classList.toggle("active");
}

const Header = (props) => {



  return(
    <header className="header">
      <div className="header__logo" onClick={() => toggleNav()}>
        <div className="header__logo-label">
          Birdy-App
        </div>
        <div className="header__logo-icon">
          <i className="fas fa-rocket"></i>
        </div>
      </div>
      <div className="header__title">
        <Link to="/profile" style={{ textDecoration: 'none' }}>
            <h3 className="header__title-text">Profile</h3>
        </Link>
      </div>
      <div className="header__search">
        <div className="header__search-input">
          <Field
            id={1}
            label="Search"
            locked={false}
            active={false}
          />
          <i className="fas fa-search search-icon"></i>
        </div>
        <div className="header__search-title">
          <h3>find friends</h3>
        </div>
      </div>
      <div className="header__user">
        <Link to={"/profile/"+props.user.id}>
          <div className="header__profile">
            <div className="header__profile-icon">
              <img src={props.user.avatar} />
            </div>
            <div className="header__profile-label">
              <h3>Mounib</h3>
            </div>
          </div>
        </Link>
        <div className="header__icons">
          <div className="header__icons-block">
            <i className="fas fa-user-friends"></i>
          </div>
          <div className="header__icons-block">
            <i className="fab fa-twitch"></i>
          </div>
          <div className="header__icons-block">
            <i className="fas fa-globe-europe"></i>
          </div>
          <div className="header__icons-block">
            <i className="fas fa-caret-down"></i>
          </div>
        </div>
      </div>

    </header>
  )
};


function mapStateToProps({user}){
  return {
    user
  }
}
export default connect(mapStateToProps)(Header);
