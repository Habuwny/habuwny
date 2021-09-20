import gsap from 'gsap';
import { Back } from 'gsap/gsap-core';

export const showFloor = () => {
  const tl = gsap.timeline({});

  tl.to('#treesFloor', {
    duration: 1.5,
    autoAlpha: 1,
    y: 0,
  })
    .to('#littleTrees, #flowers', {
      duration: 4,
      autoAlpha: 1,
      y: 0,
      scaleY: 1,
      transformOrigin: 'bottom center',
      ease: Back.easeInOut,
    })
    .to('#trees, #Birds', {
      duration: 4,
      autoAlpha: 1,
      scaleY: 1,
      transformOrigin: 'bottom center',
      ease: Back.easeInOut,
    });
  return tl;
};
