import gsap from 'gsap';
import { Bounce } from 'gsap/gsap-core';

export const openLight = () => {
  let tl = gsap.timeline({});

  tl.to('#lampLightLampa1', { fill: '#ffd111', ease: Bounce.easeInOut })
    .to(
      '#lampLightLampa2',
      {
        fill: '#eeba66',
        ease: Bounce.easeInOut,
      },
      '<'
    )
    .to('#lampSparksHeart, #lampSparksSun, #lampSparksMoon', {
      fill: '#ffd000',
      ease: Bounce.easeInOut,
    });

  return tl;
};
