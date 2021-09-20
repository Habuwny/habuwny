import gsap from 'gsap';
import { Back } from 'gsap/gsap-core';
export const showFloor = () => {
  let tl = gsap.timeline({});

  tl.to('#treesFloor', { duration: 1.5, autoAlpha: 1, y: 0 }).to(
    '#littleTrees',
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
