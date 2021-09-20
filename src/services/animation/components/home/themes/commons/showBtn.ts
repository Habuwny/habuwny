import gsap from 'gsap';
import { Bounce } from 'gsap/gsap-core';
export const showBtn = (fill?: string) => {
  const btn = window.innerWidth >= 600 ? '#BtnBigBox' : '#BtnSmallBox';
  const text = window.innerWidth >= 600 ? '#BtnTextBig' : '#BtnTextSmall';

  let tl = gsap.timeline({});

  tl.set(btn, {
    visibility: 'visible',
    fill: fill || '#350da3',
    autoAlpha: 0,
    y: '+=500',
  }).to([btn, text], {
    duration: 4,
    cursor: 'pointer',
    visibility: 'visible',
    autoAlpha: 1,
    y: 0,
    ease: Bounce.easeOut,
  });

  return tl;
};
