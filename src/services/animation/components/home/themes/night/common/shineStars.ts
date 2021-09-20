import gsap from 'gsap';
import { Back } from 'gsap/gsap-core';
export const shineStars = () => {
  let tl = gsap.timeline({ repeat: -1, repeatDelay: 10 });

  tl.fromTo(
    '.starShine',
    { opacity: 0.6, scale: 1, transformOrigin: 'center center' },
    {
      duration: 4,
      opacity: 1,
      scale: 1.009,
      transformOrigin: 'center center',
      ease: Back.easeInOut,
    }
  ).to('.starShine', {
    opacity: 0.6,
    scale: 1,
    transformOrigin: 'center center',
    ease: Back.easeInOut,
  });
  return tl;
};
