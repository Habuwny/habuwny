import gsap from 'gsap';
import { Bounce } from 'gsap/gsap-core';
import { getViewBox } from '../../imports';

export const heartBG = () => {
  const tl = gsap.timeline({});


  const { height } = getViewBox('.intro__theme');

  tl.to('#defaultBG', {
    duration: 5,
    y: `+=${height}`,
    ease: Bounce.easeOut,
  }).to('#heartBG', { duration: 5, y: 0, ease: Bounce.easeOut }, '<');

  return tl;
};
