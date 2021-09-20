import gsap from 'gsap';
import { Back } from 'gsap/gsap-core';
export const showStars = () => {
  let tl = gsap.timeline({});

  tl.fromTo(
    '#stars',
    { autoAlpha: 0 },
    {
      duration: 3,
      opacity: 0.6,
      autoAlpha: 1,
      ease: Back.easeInOut,
    }
  );
  return tl;
};
