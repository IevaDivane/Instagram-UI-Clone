import React from 'react';
import { profile } from '../../data/data';
import writeImg from '../../images/write.png';
import messageInCircleImg from '../../images/message-in-circle.png';
import './MessengerPage.scss';

const Messenger = () => {
  const a = 1 + 2;
  return (
    <div className="messenger__box">
      <div className="messenger__box-left">
        <div className="messenger__header">
          <select name="" id="">
            <option value="">shirleyromero</option>
          </select>
          <img src={writeImg} alt="writing icon" />
        </div>
        <div className="messenger__box-left-profiles-box">
          {/* eslint-disable-next-line no-param-reassign,no-return-assign */}
          {profile.filter(({ isWriting }) => isWriting).map(({ smallImgSrc, username, message }) => (
            <div className="messenger__box-left-profiles">
              <img src={smallImgSrc} alt={username} />
              <div className="messenger__box-left-profiles-text">
                <p className="messenger__box-left-profiles-text-username">{username}</p>
                <p className="messenger__box-left-profiles-text-message">{message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="messenger__box-right">
        <div className="messenger__box-right-box">
          <img src={messageInCircleImg} alt="" className="messenger__box-right-img" />
          <h3 className="messenger__box-right-h">Your Messages</h3>
          <p className="messenger__box-right-p">Send private photos and messages to a friend or group.</p>
          <button className="messenger__box-right-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
