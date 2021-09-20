import gsap from 'gsap';

import { select } from '../imports';
import { enums } from './enums';

export const createParticle = (
  numParticle: number,
  container: any,
  className: string
) => {
  const { particleColor, particleType } = enums();
  let particlesPool: any = [];

  let p;

  while (--numParticle > -1) {
    p = select(particleType[numParticle % particleType.length])!.cloneNode(
      true
    ) as HTMLElement;
    container!.appendChild(p);
    p!.setAttribute('fill', particleColor[numParticle % particleColor.length]);

    p.setAttribute('class', className);
    particlesPool.push(p);
    gsap.set(p, {
      x: -100,
      y: -100,
      transformOrigin: '50% 50%',
    });
  }
  return particlesPool;
};
