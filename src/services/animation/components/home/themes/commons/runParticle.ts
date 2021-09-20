import gsap from 'gsap';
import { flash } from './flash';
interface RunParticleProps {
  particlesPool: any[];
  particlesNum: number;
  motionsObj?: {
    duration: number;
    velocity: { min: number; max: number };
    angle: { min: number; max: number };
    gravity: { min: number; max: number };
  };
}
let particlesCount = 0;
export const runParticle = ({
  particlesPool,
  particlesNum,
  motionsObj,
}: RunParticleProps) => {
  const getScale = gsap.utils.random(10, 15, 1.5, true);
  let p = particlesPool[particlesCount];

  gsap.set(p, {
    x: gsap.getProperty('.pContainer', 'x'),
    y: gsap.getProperty('.pContainer', 'y'),
    scale: getScale(),
  });

  let tl1 = gsap.timeline();
  tl1.to(p, {
    duration: motionsObj ? motionsObj.duration : gsap.utils.random(0.61, 6),
    physics2D: {
      velocity: motionsObj
        ? gsap.utils.random(motionsObj.velocity.min, motionsObj.velocity.max)
        : gsap.utils.random(-23, 23),
      angle: motionsObj
        ? gsap.utils.random(motionsObj.angle.min, motionsObj.angle.max)
        : gsap.utils.random(-180, 180),
      gravity: motionsObj
        ? gsap.utils.random(motionsObj.gravity.min, motionsObj.gravity.max)
        : gsap.utils.random(-6, 100),
    },
    scale: 2,
    repeat: 6,
    rotation: gsap.utils.random(-123, 360),
    ease: 'power1',
    onStart: motionsObj ? () => {} : flash,
    onStartParams: [p],
    onRepeat: (p: string) => {
      gsap.set(p, { scale: getScale() });
      gsap.set(p, { opacity: 0.3 });
    },
    onRepeatParams: [p],
  });
  particlesCount++;
  // TODO: control num of particles
  particlesCount = particlesCount >= particlesNum ? 0 : particlesCount;
};
