import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import messengerImg from '../../images/messenger.png';
import homeImg from '../../images/home.png';
import logoImg from '../../images/logo.png';
import newPostImg from '../../images/newPost.png';
import exploreImg from '../../images/explore.png';
import likeImg from '../../images/like.png';
import profileImg from '../../images/profile.png';
import searchImg from '../../images/search.png';

// const getActiveLinkClassName = (isActive:boolean) => (isActive ? 'link link--active' : 'link');

const Header = () => (
  <div className="component-header">
    <header className="header">
      <nav className="header-links">
        <NavLink className="logo" to="/">
          <img src={logoImg} alt="logo" />
        </NavLink>
        <div className="input">
          <div className="search-input">
            <img src={searchImg} alt="search" />
            <span>Search</span>
          </div>
        </div>
        <div className="header-links__icons">
          <NavLink className="icon home" to="/">
            <img src={homeImg} alt="home" />
          </NavLink>
          <NavLink className="icon messenger" to="/messenger">
            <img src={messengerImg} alt="messenger" />
          </NavLink>
          <NavLink className="icon new-post" to="#">
            <img src={newPostImg} alt="newPost" />
          </NavLink>
          <NavLink className="icon explore" to="/explore">
            <img src={exploreImg} alt="explore" />
          </NavLink>
          <NavLink className="icon like" to="#">
            <img src={likeImg} alt="like" />
          </NavLink>
          <NavLink className="icon my-profile" to="/my-profile">
            <img src={profileImg} alt="like" />
          </NavLink>
        </div>
        <div className="line-bottom" />
      </nav>
    </header>
  </div>
);

export default Header;
