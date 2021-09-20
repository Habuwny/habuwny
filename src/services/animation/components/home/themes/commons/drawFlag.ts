import { select } from '../imports';
import { createParticle } from './createParticle';
import gsap from 'gsap';
import { clearParticles } from '../imports';
import { runParticle } from './runParticle';
import { Bounce } from 'gsap/gsap-core';

export const drawFlag = () => {
  const defaultFull = select('.intro__theme');
  const particlesNum = 500;
  let particlesPool: any;

  particlesPool = createParticle(particlesNum, defaultFull, 'particle_flag');

  const onStart = () => {
    gsap.set('#Pen', { clearProps: 'all' });
    clearParticles('.particle_flag, .particle_draw, .particle_switch');
    particlesPool = createParticle(particlesNum, defaultFull, 'particle_flag');
  };
  const onUpdate = () => {
    let motionsObj = {
      duration: 3,
      velocity: { min: -1, max: 1 },
      angle: { min: -1, max: 1 },
      gravity: { min: -1, max: 1 },
    };
    const obj = { particlesPool, particlesNum, motionsObj };
    runParticle(obj);
  };
  let tl = gsap.timeline({
    onStart,
    onUpdate,
  });
  tl.to('.pContainer, #Pen', {
    duration: 5,
    transformOrigin: '50% 50%',
    motionPath: {
      path: '#mapPath',
      align: '#mapPath',
      autoRotate: 225,
      alignOrigin: [0.5, 0.5],
    },
  })
    .to('#Flag', {
      duration: 3,
      opacity: 0.3,
      ease: Bounce.easeInOut,
    })
    .to('#Flag', {
      duration: 3,
      opacity: 0,
      ease: Bounce.easeInOut,
    });
  return tl;
};
