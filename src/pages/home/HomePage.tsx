import React from 'react';
import './HomePage.scss';
import { useNavigate } from 'react-router-dom';
import Stories from '../../components/stories/Stories';
import Post from '../../components/post/Post';
import Footer from '../../components/footer/Footer';
import Suggestions from '../../components/suggestions/Suggestions';
import { profile } from '../../data/data';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="box--home">
      <div className="box">
        <div className="left-box">
          <Stories />
          <Post />
        </div>
      </div>
      <div className="right-box">
        {profile.filter(({ id }) => id === 1).map(({
          username, posts, followers, postImages, name, following, smallImgSrc, profilePic,
        }) => (
          <div className="profile-info" onClick={() => navigate('/my-profile')}>
            <img src={profilePic} alt="profile-img" className="profile-img" />
            <div className="username-name">
              <span className="profile-info__username">{username}</span>
              <span className="profile-info__name">{name}</span>
            </div>
            <button type="button" className="profile-info__button">Switch</button>
          </div>
        ))}
        <Suggestions />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
