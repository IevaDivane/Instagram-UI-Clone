import React from 'react';
import './User-ProfilePage.scss';
import { profile } from '../../data/data';
import moreIcon from '../../images/more.png';
import postsIcon from '../../images/posts.png';
import guidesIcon from '../../images/guides.png';
import reelsIcon from '../../images/reels.png';
import videosIcon from '../../images/video.png';
import taggedIcon from '../../images/tagged.png';
import Footer from '../../components/footer/Footer';
import FooterBig from '../../components/footer/FooterBig';

const UserProfilePage = () => (
  <div className="user-profile__box">
    <div className="user-profile__box">
      {profile.filter(({ userprofile }) => userprofile).map(({
        username, posts, id, followers, postImages, name, following, smallImgSrc, profilePic,
      }) => (
        <div>
          <div className="user-profile__box--header">
            <div className="user-profile__box--header-all">
              <div className="user-profile__box--header-image">
                <img src={profilePic} alt={username} className="user-profile__box--header-image-profile" />
              </div>
              <div className="user-profile__box--header-profile-info">
                <div className="user-profile__box--header-profile-first-row">
                  <span className="user-profile__box--header-username">{username}</span>
                  {' '}
                  <button className="user-profile__box--header-button">Follow</button>
                  <img className="user-profile__box--header-more" src={moreIcon} alt="more" />
                </div>
                <div className="user-profile__box--header-second-row">
                  <span>
                    <span className="user-profile__numbers">{posts}</span>
                    {' '}
                    posts
                  </span>
                  <span>
                    <span className="user-profile__numbers">{followers}</span>
                    {' '}
                    followers
                  </span>
                  <span>
                    <span className="user-profile__numbers">{following}</span>
                    {' '}
                    following
                  </span>
                </div>
                <div className="user-profile__box--header-third-row">
                  <span>{name}</span>
                </div>
              </div>
            </div>
            <div className="user-profile__box--header-stories">
              {id >= 2 ? postImages && postImages.map((img) => (
                <div className="user-profile__box--header-story">
                  <img src={img} alt={username} className="user-profile__box--header-story-img" />
                  {' '}
                  <span className="user-profile__box--header-story-title">lorem...</span>
                </div>
              )) : <div><span /></div>}
            </div>
          </div>
          <div className="user-profile__box--body">
            <div className="user-profile__box--body-tablist">
              <button className="user-profile__box--body-tablist-button pressed-tablist">
                <img src={postsIcon} alt="" />
                posts
              </button>
              <button className="user-profile__box--body-tablist-button">
                <img src={guidesIcon} alt="" />
                guides
              </button>
              <button className="user-profile__box--body-tablist-button">
                <img src={reelsIcon} alt="" />
                reels
              </button>
              <button className="user-profile__box--body-tablist-button">
                <img src={videosIcon} alt="" />
                videos
              </button>
              <button className="user-profile__box--body-tablist-button">
                <img src={taggedIcon} alt="" />
                tagged
              </button>
            </div>
            <div className="user-profile__box--body-posts">
              {postImages && postImages.map((i) => (
                <div className="user-profile__box--body-post">
                  <img src={i} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="user-profile__box--footer">
            <FooterBig />
          </div>

        </div>
      ))}
    </div>

  </div>
);

export default UserProfilePage;
