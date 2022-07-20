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
import post1 from '../images/post1.png';
import post2 from '../images/post2.png';
import post3 from '../images/post3.png';
import post4 from '../images/post4.png';
import post5 from '../images/post5.png';
import post6 from '../images/post6.png';
import profilePicTerry from '../images/profilePicTerry.png';
import profilePicShirley from '../images/profilePicShirley.png';

export type ProfileType = {
    id:number,
    username?:string,
    me?:string,
    imgSrc?:any,
    smallImgSrc?:string,
    bigImgSrc?:any,
    likes?:string,
    comment?:string,
    followInfo?:string,
    isWriting:boolean,
    message?:string,
    postImages?:string[],
    userprofile:boolean,
    profilePic?:string,
    posts?:string,
    followers?:string,
    following?:string,
    name?:string,
    posted:boolean,
   storyAdded:boolean,
}
export const profile:ProfileType[] = [
  {
    id: 1,
    username: 'shirleyromero',
    name: 'Shirley Romero',
    imgSrc: storyImg,
    smallImgSrc: storyImg,
    isWriting: false,
    postImages: [post1, post2, post3, post4, post5, post6],
    userprofile: false,
    profilePic: profilePicShirley,
    posts: '0',
    followers: '255',
    following: '500',
    posted: false,
    storyAdded: true,
  },
  {
    id: 2,
    username: 'terrylucas',
    name: 'Terry Lucas',
    imgSrc: terriImg,
    bigImgSrc: terryBigImg,
    likes: '1.069',
    comment: 'Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque',
    followInfo: 'Followed by terylucas + 2 more',
    smallImgSrc: terrySmImg,
    isWriting: true,
    message: 'Imperdiet in sit rhoncus, eleifend tellu...',
    postImages: [post1, post2, post3, post4, post5, post6],
    userprofile: true,
    profilePic: profilePicTerry,
    posts: '1.258',
    followers: '4M',
    following: '1.250',
    posted: true,
    storyAdded: true,
  },
  {
    id: 3,
    username: 'lauramatthews',
    imgSrc: lauraImg,
    followInfo: 'Followed by lauramatthews + 2 more',
    smallImgSrc: lauraSmImg,
    isWriting: true,
    bigImgSrc: terryBigImg,
    message: 'Active 1h ago',
    userprofile: false,
    posted: true,
    storyAdded: true,
  },
  {
    id: 4,
    username: 'harryprescott',
    imgSrc: harryImg,
    followInfo: 'Followed by harryImg + 2 more',
    smallImgSrc: harrySmImg,
    isWriting: true,
    bigImgSrc: terryBigImg,
    message: 'Augue lectus potenti pellentesque.',
    userprofile: false,
    posted: true,
    storyAdded: true,
  },
  {
    id: 5,
    username: 'ednamanz',
    imgSrc: ednaImg,
    followInfo: 'Followed by ednaImg + 2 more',
    smallImgSrc: ednaSmImg,
    isWriting: true,
    bigImgSrc: terryBigImg,
    message: 'Active 1h ago',
    userprofile: false,
    posted: true,
    storyAdded: true,
  }, {
    id: 6,
    username: 'christinasterling',
    imgSrc: christinaImg,
    followInfo: 'Followed by christinaImg + 2 more',
    smallImgSrc: christinaSmImg,
    isWriting: true,
    bigImgSrc: terryBigImg,
    message: 'Imperdiet in sit rhoncus, eleifend tellu...',
    userprofile: false,
    posted: true,
    storyAdded: true,
  },
  {
    id: 7,
    username: 'johnschmit',
    imgSrc: johnImg,
    isWriting: false,
    bigImgSrc: terryBigImg,
    userprofile: false,
    posted: true,
    storyAdded: true,
  },
  {
    id: 8,
    username: 'amy',
    imgSrc: amyImg,
    isWriting: false,
    userprofile: false,
    posted: false,
    bigImgSrc: terryBigImg,
    storyAdded: true,
  },

];
