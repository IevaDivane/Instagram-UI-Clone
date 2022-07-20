import React from 'react';
import './Post.scss';
import { useNavigate } from 'react-router-dom';
import { profile } from '../../data/data';
import likeImg from '../../images/like.png';
import commentImg from '../../images/comment.png';
import shareImg from '../../images/share.png';
import saveImg from '../../images/save.png';
import emojiImg from '../../images/emoji.png';

const Post = () => {
  const navigate = useNavigate();
  return (
    <div>
      {profile.filter(({ posted }) => posted).map(({
        imgSrc, username, bigImgSrc, likes, comment,
      }) => (
        <div className="post">
          <div className="post__header">
            <div className="post__header-img-username">
              <img src={imgSrc} alt="user-pic" />
              <span className="post__username" onClick={() => navigate('/user-profile')}>{username}</span>
            </div>
            <p className="more-img">...</p>
          </div>
          <div>
            <img src={bigImgSrc} alt="big-post-img" />
          </div>
          <div className="like-share-comment-save">
            <div className="like-share-comment">
              <img src={likeImg} alt="like" />
              <img src={commentImg} alt="comment" />
              <img src={shareImg} alt="share" />
            </div>
            <img src={saveImg} alt="save" />
          </div>
          <div className="post-info">
            <span className="likes">
              {likes}
              {' '}
              {' '}
              likes
            </span>
            <span className="username">
              terrylucas
              <span className="user-comment">
                {comment}
              </span>
              <button className="btn-more">...more</button>
            </span>
            <span className="comments-view-all">
              View all 100 comments
            </span>
            <span className="posted">1 Hour ago</span>
          </div>
          <div className="add-comment">
            <div className="add-comment__emoji-input">
              <img src={emojiImg} alt="emoji" className="comment-emoji" />
              <input placeholder="Add a comment..." className="comment-input" />
            </div>
            <button className="add-comment__button">post</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
