import gsap from 'gsap';
import { Back } from 'gsap/gsap-core';

export const lamp = () => {
  let tl = gsap.timeline({});

  tl.fromTo(
    '#Lamp',
    { autoAlpha: 0, scaleY: 0.5 },
    { duration: 3, autoAlpha: 1, scaleY: 1, ease: Back.easeOut.config(4) }
  );
  return tl;
};
