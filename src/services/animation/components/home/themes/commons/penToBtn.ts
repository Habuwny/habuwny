import gsap from 'gsap';
import { select } from '../imports';
import { createParticle } from './createParticle';
import { runParticle } from './runParticle';
import { clearParticles } from '../imports';
import { Bounce } from 'gsap/gsap-core';

export const penToBtn = () => {
  const btn = window.innerWidth >= 600 ? '#BtnBigBox' : '#BtnSmallBox';
  const text = window.innerWidth >= 600 ? '#BtnTextBig' : '#BtnTextSmall';

  const container = select('.intro__theme');
  const particlesNum = 550;
  let particlesPool: any;
  particlesPool = createParticle(particlesNum, container, 'particle_btn');
  const onStart = () => {
    particlesPool = createParticle(particlesNum, container, 'particle_btn');
  };
  const onUpdate = () => {
    const obj = { particlesPool, particlesNum };
    runParticle(obj);
  };
  const onComplete = () => {
    gsap.to('.particle_btn, .particle_flag', { duration: 3, opacity: 0 });
    setTimeout(() => {
      clearParticles('.particle_btn, .particle_flag');
    }, 3000);
  };
  let tl = gsap.timeline({
    onStart,
    onUpdate,
    onComplete,
  });
  tl.to('.pContainer, #Pen', {
    duration: 5,
    transformOrigin: '50% 50%',
    motionPath: {
      path: '#penToButton',
      align: '#penToButton',
      autoRotate: 225,
      alignOrigin: [0.5, 0.5],
    },
  })

    .to('#Pen', { duration: 0.1, opacity: 0, cursor: 'pointer' })
    .to('#TempPen', { duration: 0.1, opacity: 1, cursor: 'pointer' })
    .to('#TempPen', {
      duration: 4,
      morphSVG: btn,
      cursor: 'pointer',
      onComplete: () => {
        gsap.to('.particle_btn', { duration: 0.5, opacity: 0 });
        setTimeout(() => {
          clearParticles('.particle_btn');
        }, 500);
      },
    })
    .to(text, {
      duration: 4,
      autoAlpha: 1,
      y: 0,
      ease: Bounce.easeOut,
      cursor: 'pointer',
    });
  return tl;
};
