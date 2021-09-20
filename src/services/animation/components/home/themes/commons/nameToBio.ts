import gsap from 'gsap';
import { Sine } from 'gsap/gsap-core';

export const nameToBio = () => {
  let tl = gsap.timeline();

  tl.fromTo(
    '.myName',
    { x: -20 },
    {
      duration: 0.15,
      x: 20,
      repeat: 10,
      yoyo: true,
      ease: Sine.easeInOut,
    }
  )
    .to('.myName', { x: 0 })
    .set('#Name', { visibility: 'visible' })
    .set('#Name', { duration: 0.1, fill: '#dcb7b7' })
    .to('#Name', { duration: 5, morphSVG: '#common_full-IntroText' });
  return tl;
};
