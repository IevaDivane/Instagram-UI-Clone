import storyImg from '../images/story-item2.png';
import terriImg from '../images/terryLucas.png';
import lauraImg from '../images/laura.png';
import harryImg from '../images/harry.png';
import ednaImg from '../images/edna.png';
import christinaImg from '../images/christina.png';
import johnImg from '../images/john.png';
import amyImg from '../images/amy.png';
import terryBigImg from '../images/terry-big.png';
import terrySmImg from '../images/terry-sm.png';
import lauraSmImg from '../images/laura-sm.png';
import harrySmImg from '../images/harry-sm.png';
import ednaSmImg from '../images/edna-sm.png';
import christinaSmImg from '../images/christina-sm.png';

export type ProfileType = {
    id:number,
    username?:string,
    me?:string,
    imgSrc?:any,
    smallImgSrc?:any,
    bigImgSrc?:any,
    likes?:string,
    comment?:string,
    followInfo?:string,
    isWriting:boolean,
    message?:string,
}
export const profile:ProfileType[] = [
  {
    id: 2,
    username: 'terrylucas',
    imgSrc: terriImg,
    bigImgSrc: terryBigImg,
    likes: '1.069',
    comment: 'Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque',
    followInfo: 'Followed by terylucas + 2 more',
    smallImgSrc: terrySmImg,
    isWriting: true,
    message: 'Imperdiet in sit rhoncus, eleifend tellu...',
  },
  {
    id: 3,
    username: 'LauraMatt...',
    imgSrc: lauraImg,
    followInfo: 'Followed by lauramatthews + 2 more',
    smallImgSrc: lauraSmImg,
    isWriting: true,
    message: 'Active 1h ago',
  },
  {
    id: 4,
    username: 'harryprescott',
    imgSrc: harryImg,
    followInfo: 'Followed by harryImg + 2 more',
    smallImgSrc: harrySmImg,
    isWriting: true,
    message: 'Augue lectus potenti pellentesque.',
  },
  {
    id: 5,
    username: 'ednamanz',
    imgSrc: ednaImg,
    followInfo: 'Followed by ednaImg + 2 more',
    smallImgSrc: ednaSmImg,
    isWriting: true,
    message: 'Active 1h ago',
  }, {
    id: 6,
    username: 'christinaste...',
    imgSrc: christinaImg,
    followInfo: 'Followed by christinaImg + 2 more',
    smallImgSrc: christinaSmImg,
    isWriting: true,
    message: 'Imperdiet in sit rhoncus, eleifend tellu...',
  },
  {
    id: 7,
    username: 'johnschmit',
    imgSrc: johnImg,
    isWriting: false,
  },
  {
    id: 8,
    username: 'amy',
    imgSrc: amyImg,
    isWriting: false,
  },

];
