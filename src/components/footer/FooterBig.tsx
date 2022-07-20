import React from 'react';
import './FooterBig.scss';

const FooterBig = () => (
  <div className="footer-big">
    <div className="footer-big__buttons">
      <button className="footer-big__btn">Meta</button>
      <button className="footer-big__btn">About</button>
      <button className="footer-big__btn">Blog</button>
      <button className="footer-big__btn">Jobs</button>
      <button className="footer-big__btn">Help</button>
      <button className="footer-big__btn">API</button>
      <button className="footer-big__btn">Privacy</button>
      <button className="footer-big__btn">Terms</button>
      <button className="footer-big__btn">Top Accounts</button>
      <button className="footer-big__btn">Hashtags</button>
      <button className="footer-big__btn">Location</button>
      <button className="footer-big__btn">Instagram lite</button>
    </div>
    <div>
      <select name="language" className="footer-big__language">
        <option value="English">English</option>
      </select>
      <span className="footer-big__span">© 2021 Instagram from Meta</span>
    </div>
  </div>
);

export default FooterBig;
