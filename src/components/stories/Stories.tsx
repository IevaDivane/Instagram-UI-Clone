import React from 'react';
import './Stories.scss';
import { profile } from '../../data/data';
import storyImg from '../../images/story-item2.png';

const Stories = () => {
  const a = 1 + 2;
  return (
    <div className="carousel">
      {profile.filter(({ storyAdded }) => storyAdded).map(({ id, imgSrc, username }) => (
        <div key={id} className="carousel__story">
          <img src={imgSrc} alt={username} className="carousel__image" />
          {id === 1 ? <span>your story</span>
            : <span>{username}</span> }
        </div>
      ))}

    </div>
  );
};

export default Stories;
