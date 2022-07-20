import React from 'react';
import './My-ProfilePage.scss';
import { profile } from '../../data/data';
import postsIcon from '../../images/posts.png';
import taggedIcon from '../../images/tagged.png';
import moreIcon from '../../images/more.png';
import savedIcon from '../../images/saved.png';
import FooterBig from '../../components/footer/FooterBig';
import profilePosts from '../../images/profilePosts.png';
import appleStore from '../../images/appStore.png';
import googlePlay from '../../images/googlePlay.png';

const MyProfilePage = () => (
  <div className="my-profile__box">
    {profile.filter(({ id }) => id === 1).map(({
      username, posts, followers, postImages, name, following, smallImgSrc, profilePic,
    }) => (
      <div>
        <div>
          <div className="my-profile__box--header">
            <div className="my-profile__box--header-all">
              <div className="my-profile__box--header-image-profile">
                <img src={profilePic} alt={username} />
              </div>
              <div className="my-profile__box--header-profile-info">
                <div className="my-profile__box--header-profile-first-row">
                  <span className="my-profile__box--header-username">{username}</span>
                  {' '}
                  <button className="my-profile__box--header-button">Follow</button>
                  <img src={moreIcon} alt="more" className="my-profile__box--header-more" />
                </div>
                <div className="my-profile__box--header-second-row">
                  <span className="my-profile__numbers">
                    {posts}
                    {' '}
                    posts
                  </span>
                  <span className="my-profile__numbers">
                    {followers}
                    {' '}
                    followers
                  </span>
                  <span className="my-profile__numbers">
                    {following}
                    {' '}
                    following
                  </span>
                </div>
                <div className="my-profile__box--header-third-row">
                  <span>{name}</span>
                </div>
              </div>
            </div>
            <div className="my-profile__box--header-stories" />
          </div>
          <div className="my-profile__box--body">
            <div className="user-profile__box--body-tablist">
              <button className="my-profile__box--body-tablist-button">
                <img src={postsIcon} alt="" />
                posts
              </button>
              <button className="my-profile__box--body-tablist-button">
                <img src={savedIcon} alt="" />
                saved
              </button>
              <button className="my-profile__box--body-tablist-button">
                <img src={taggedIcon} alt="" />
                tagged
              </button>
            </div>
          </div>
        </div>
        <div className="my-profile__box--body-content">
          <div className="my-profile__box--body-content-posts">
            <img src={profilePosts} alt="posts" />
          </div>
          <div className="my-profile__box--body-content-download">
            <div className="my-profile__box--body-content-text">
              <span className="my-profile__box--body-content-text1">Start capturing and sharing your moments.</span>
              <span className="my-profile__box--body-content-text2">Get the app to share your first photo or video.</span>
            </div>
            <div className="my-profile__box--body-content-icons">
              <img src={googlePlay} alt="googlePlay" />
              <img src={appleStore} alt="appleStore" />
            </div>
          </div>
        </div>
        <div className="my-profile__box--footer">
          <FooterBig />
        </div>
      </div>
    ))}
  </div>
);

export default MyProfilePage;
