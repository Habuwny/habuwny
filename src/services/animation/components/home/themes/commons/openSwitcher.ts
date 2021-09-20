import gsap from 'gsap';
import { runParticle } from './runParticle';
import { createParticle } from './createParticle';
import { select } from '../../../../../../tools';
import { SwitcherClick } from '../imports';
export const openLampSwitcher = (theme: string) => {
  const container = select('.intro__theme');
  const particlesNum = 520;
  let particlesPool: any;
  particlesPool = createParticle(particlesNum, container, 'particle_switch');
  const onStart = () => {
    particlesPool = createParticle(particlesNum, container, 'particle_switch');
  };
  const onUpdate = () => {
    const obj = { particlesPool, particlesNum };
    runParticle(obj);
  };
  let tl = gsap.timeline({
    onStart,
    onUpdate,
  });
  tl.to('.pContainer, #Pen', {
    transformOrigin: '90% 10%',
    duration: 2,
    rotation: theme === 'full' ? 30 : 0,
    motionPath: {
      path: '#penOpenLight',
      align: '#penOpenLight',
      autoRotate: theme === 'full' ? 30 : 50,
      alignOrigin: [0.9, 0.1],
    },
  }).to('#lampSwitcher', {
    duration: 1,
    fill: '#f81f05',
    y: '+=40',
    onStart: SwitcherClick,
  });

  return tl;
};
