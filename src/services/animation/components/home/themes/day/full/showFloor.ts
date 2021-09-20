import gsap from 'gsap';
import { Back } from 'gsap/gsap-core';
export const showFloor = () => {
  let tl = gsap.timeline({});

  tl.to('#treesFloor', { duration: 1.5, autoAlpha: 1, y: 0 })
    .to('#littleTrees', {
      duration: 4,
      autoAlpha: 1,
      y: 0,
      scaleY: 1,
      transformOrigin: 'bottom center',
      ease: Back.easeInOut,
    })
    .to('#flowers', {
      duration: 3,
      autoAlpha: 1,
      y: 0,
      scaleY: 1,
      transformOrigin: 'bottom center',
      ease: Back.easeInOut,
    })
    .to(
      '#bigTrees',
      {
        duration: 4,
        autoAlpha: 1,
        scaleY: 1,
        transformOrigin: 'bottom center',
        ease: Back.easeInOut,
      },
      '<'
    )
    .to('#beesHome', {
      duration: 4,
      autoAlpha: 1,
      scaleY: 1,
      transformOrigin: 'top center',
      ease: Back.easeInOut,
    });

  return tl;
};
