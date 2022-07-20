import React from 'react';
import './ExplorePage.scss';
import explore1 from '../../images/explore1.png';
import explore2 from '../../images/explore2.png';
import explore3 from '../../images/explore3.png';
import explore4 from '../../images/explore4.png';
import explore5 from '../../images/explore5.png';
import explore6 from '../../images/explore6.png';

const ExplorePage = () => (
  <div className="box--explore">
    <div className="box--explore-gallery">
      <div className="box--explore-gallery__items1And2">
        <div className="box--explore-gallery__item">
          <img src={explore1} alt="explore1" className="gallery__img" />
          <img src={explore2} alt="explore2" className="gallery__img" />
        </div>
        <div className="box--explore-gallery__item2">
          <img src={explore3} alt="explore3" className="gallery__img" />
        </div>
      </div>
      <div className="box--explore-gallery__item3">
        <img src={explore4} alt="explore4" className="gallery__img" />
        <img src={explore5} alt="explore5" className="gallery__img" />
        <img src={explore6} alt="explore6" className="gallery__img" />
      </div>
      <div className="box--explore-gallery__item3">
        <img src={explore4} alt="explore4" className="gallery__img" />
        <img src={explore5} alt="explore5" className="gallery__img" />
        <img src={explore6} alt="explore6" className="gallery__img" />
      </div>
    </div>
  </div>
);

export default ExplorePage;
