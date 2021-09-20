import gsap from 'gsap';
import { Bounce } from 'gsap/gsap-core';

export const openLight = () => {
  let tl = gsap.timeline({});

  tl.to('#lampMoonLampa, #lampSunLampa, #lampHeartLampa', {
    fill: '#eeba00',
    ease: Bounce.easeInOut,
  }).to(
    '#lampMoonSet, #lampSunSet, #lampHeartSet',
    { fill: '#eeba44', ease: Bounce.easeInOut },
    '+=0.3'
  );
  return tl;
};
