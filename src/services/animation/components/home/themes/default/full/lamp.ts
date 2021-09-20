import gsap from 'gsap';
import { Back } from 'gsap/gsap-core';

export const lamp = () => {
  let tl = gsap.timeline({});

  tl.fromTo(
    '#Lamp',
    { duration: 2, autoAlpha: 0 },
    { duration: 2, autoAlpha: 1 }
  )
    .fromTo(
      '#lampLight',
      { rotation: -45, y: '+=300', transformOrigin: 'center center' },
      {
        duration: 2,
        rotation: 0,
        y: 0,
        transformOrigin: 'center center',
        ease: Back.easeInOut.config(4),
      }
    )
    .fromTo(
      '#lampLeg',
      { scaleY: 0.6, transformOrigin: 'bottom center' },
      {
        duration: 2,
        scaleY: 1,
        transformOrigin: 'bottom center',
        ease: Back.easeInOut.config(4),
      },
      '<'
    );

  return tl;
};
