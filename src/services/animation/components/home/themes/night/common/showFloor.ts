import gsap from 'gsap';
import { Back } from 'gsap/gsap-core';
export const showFloor = () => {
  let tl = gsap.timeline({});

  tl.fromTo(
    '#treesFloor',
    { autoAlpha: 0, y: `+=100` },
    { duration: 1.5, autoAlpha: 1, y: 0 }
  ).fromTo(
    '#trees',
    { autoAlpha: 0, scaleY: 0.1, y: '+=200', transformOrigin: 'bottom center' },
    {
      duration: 4,
      autoAlpha: 1,
      y: 0,
      scaleY: 1,
      transformOrigin: 'bottom center',
      ease: Back.easeInOut,
    }
  );

  return tl;
};
