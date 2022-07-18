import React from 'react';
import './Suggestions.scss';
import terrySmImg from '../../images/terry-sm.png';
import lauraSmImg from '../../images/laura-sm.png';
import harrySmImg from '../../images/harry-sm.png';
import ednaSmImg from '../../images/edna-sm.png';
import christinaSmImg from '../../images/christina-sm.png';
import Footer from '../footer/Footer';
import { profile } from '../../data/data';

const Suggestions = () => (
  <div className="suggestions">
    <div className="suggestions__header">
      <span className="suggestions__header-span">Suggestions For You</span>
      <button className="suggestions__header-btn">See All</button>
    </div>
    <div className="suggestions__profiles">

      {profile.filter(({ isWriting }) => isWriting === true).map(({ smallImgSrc, followInfo, username }) => (
        <div className="suggestions__profile">
          <div className="suggestions__profile-img-text">
            <img src={smallImgSrc} alt="user-img" className="suggestions__profile-user-img" />
            <div className="suggestions__profile-user-info">
              <span className="suggestions__profile-user-info--username">{username}</span>
              <span className="suggestions__profile-user-info--following-info">{followInfo}</span>
            </div>
          </div>
          <button className="suggestions__profile-btn">Follow</button>
        </div>
      ))}
    </div>
  </div>
);

export default Suggestions;
