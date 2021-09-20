import gsap from 'gsap';
import { Elastic, Back } from 'gsap/gsap-core';

export const beeHoney = () => {
  const tl = gsap.timeline({ repeat: -1 });

  tl.to('#beeFly', {
    duration: 4,
    autoAlpha: 1,
    scale: 1,
    transformOrigin: 'center center',
    ease: Back.easeInOut,
  })
    .to('#beeFly', {
      duration: 10,
      transformOrigin: '50% 50%',
      motionPath: {
        path: '#beePath1',
        align: '#beePath1',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: Elastic.easeOut.config(0.5, 0.3),
      // onComplete: playAudio,
    })
    .to('#beeFly', {
      duration: 10,
      transformOrigin: '50% 50%',
      motionPath: {
        path: '#beePath2',
        align: '#beePath2',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: Elastic.easeOut.config(0.5, 0.3),
      // onComplete: playAudio,
    })
    .to('#beeFly', {
      duration: 10,
      transformOrigin: '50% 50%',
      motionPath: {
        path: '#beePath3',
        align: '#beePath3',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: Elastic.easeOut.config(0.5, 0.3),
      // onComplete: playAudio,
    })
    .to('#beeFly', {
      duration: 10,
      transformOrigin: '50% 50%',
      motionPath: {
        path: '#beePath4',
        align: '#beePath4',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: Elastic.easeOut.config(0.5, 0.3),
      // onComplete: playAudio,
    })
    .to('#beeFly', {
      duration: 10,
      transformOrigin: '50% 50%',
      motionPath: {
        path: '#beePath5',
        align: '#beePath5',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: Elastic.easeOut.config(0.5, 0.3),
      // onComplete: playAudio,
    })
    .to('#beeFly', {
      duration: 10,
      transformOrigin: '50% 50%',
      motionPath: {
        path: '#beePath6',
        align: '#beePath6',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: Elastic.easeOut.config(0.5, 0.3),
      // onComplete: playAudio,
    })
    .set('#beeFly', { rotation: 200, scaleY: -1 })

    .to('#beeFly', {
      duration: 10,
      transformOrigin: '50% 50%',
      motionPath: {
        path: '#beePath7',
        align: '#beePath7',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: Elastic.easeOut.config(0.5, 0.3),
      // onComplete: playAudio,
    })
    .to('#beeFly', {
      duration: 10,
      transformOrigin: '50% 50%',
      motionPath: {
        path: '#beePath8',
        align: '#beePath8',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: Elastic.easeOut.config(0.5, 0.3),
      // onComplete: playAudio,
    })
    .to('#beeFly', {
      duration: 20,
      transformOrigin: '50% 50%',
      motionPath: {
        path: '#beePath9',
        align: '#beePath9',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: Elastic.easeOut.config(0.5, 0.3),
      // onComplete: playAudio,
    })
    .add('sss')
    .set('#beeFly', { autoAlpha: 0 })
    .set('#beeWithHoney', { autoAlpha: 1 })
    .to('#beeWithHoney', {
      duration: 30,
      transformOrigin: '50% 50%',
      motionPath: {
        path: '#beePath10',
        align: '#beePath10',
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
      },
      ease: Elastic.easeOut.config(0.5, 0.3),
    })
    .to('#beeWithHoney', { duration: 4, scale: 0 })
    .to('#beeWithHoney', { autoAlpha: 0 });

  return tl;
};
