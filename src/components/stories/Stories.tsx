import React from 'react';
import './Stories.scss';
import { profile } from '../../data/data';
import storyImg from '../../images/story-item2.png';

const Stories = () => {
  const a = 1 + 2;
  return (
    <div className="carousel">
      <div>
        <img src={storyImg} alt="story" />
        <span>your story</span>
      </div>
      {profile.map(({ id, imgSrc, username }) => (
        <div key={id}>
          <img src={imgSrc} alt={username} />
          <span>{username}</span>
        </div>
      ))}

    </div>
  );
};

export default Stories;
