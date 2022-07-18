import React from 'react';
import './HomePage.scss';
import likeImg from '../../images/like.png';
import commentImg from '../../images/comment.png';
import shareImg from '../../images/share.png';
import saveImg from '../../images/save.png';
import emojiImg from '../../images/emoji.png';
import terriImg from '../../images/terryLucas.png';
import moreImg from '../../images/more.png';
import terryBigImg from '../../images/terry-big.png';
import shirleyImg from '../../images/shirley.png';
import terrySmImg from '../../images/terry-sm.png';
import lauraSmImg from '../../images/laura-sm.png';
import harrySmImg from '../../images/harry-sm.png';
import ednaSmImg from '../../images/edna-sm.png';
import christinaSmImg from '../../images/christina-sm.png';
import Stories from '../../components/stories/Stories';
import Post from '../../components/post/Post';
import Footer from '../../components/footer/Footer';
import Suggestions from '../../components/suggestions/Suggestions';

const HomePage = () => (
  <div className="box--home">
    <div className="box">
      <div className="left-box">
        <Stories />
        <Post />
      </div>
    </div>
    <div className="right-box">
      <div className="profile-info">
        <img src={shirleyImg} alt="profile-img" className="profile-img" />
        <div className="username-name">
          <span className="profile-info__username">shirleyromero</span>
          <span className="profile-info__name">Shirley Romero</span>
        </div>
        <button type="button" className="profile-info__button">Switch</button>
      </div>
      <Suggestions />
      <Footer />
    </div>
  </div>
);

export default HomePage;
