import gsap from 'gsap';
import { Bounce } from 'gsap/gsap-core';

export const themes = () => {
  let master = gsap.timeline({ repeat: -1, repeatRefresh: true });

  const heartTheme = () => {
    let tl = gsap.timeline({});

    tl.to('#lampSparksMoon', { duration: 0.3, fill: '#ffd000' })
      .to('#lampSparksSun', { duration: 0.3, fill: '#ffd000' })
      .to('#lampLightLampa1', { fill: '#aa1409', ease: Bounce.easeInOut })
      .to(
        '#lampLightLampa2',
        {
          fill: '#f44336',
          ease: Bounce.easeInOut,
        },
        '-=0.7'
      )
      .to(
        '#lampSparksHeart',
        {
          fill: '#f44336',
          ease: Bounce.easeInOut,
        },
        '-=0.6'
      )
      .to('#heartTheme', {
        duration: 50,
        motionPath: {
          path: '#heartThemePath',
          align: '#heartThemePath',
          alignOrigin: [0.5, 0.5],
        },
        onStart: () => {
          gsap.set('#heartTheme', { visibility: 'visible' });
        },
        onComplete: () => {
          gsap.set('#heartTheme', { visibility: 'hidden' });
        },
      });

    return tl;
  };
  const moonTheme = () => {
    let tl = gsap.timeline({});

    tl.to('#lampSparksHeart', { duration: 0.3, fill: '#ffd000' })
      .to('#lampSparksSun', { duration: 0.3, fill: '#ffd000' })
      .to('#lampLightLampa1', { fill: '#959cb3', ease: Bounce.easeInOut })
      .to(
        '#lampLightLampa2',
        {
          fill: '#bdc1cf',
          ease: Bounce.easeInOut,
        },
        '-=0.7'
      )
      .to(
        '#lampSparksMoon',
        {
          fill: '#959cb3',
          ease: Bounce.easeInOut,
        },
        '-=0.6'
      )
      .to('#moonTheme', {
        duration: 50,
        motionPath: {
          path: '#moonThemePath',
          align: '#moonThemePath',
          alignOrigin: [0.5, 0.5],
        },
        onStart: () => {
          gsap.set('#moonTheme', { visibility: 'visible' });
        },
        onComplete: () => {
          gsap.set('#moonTheme', { visibility: 'hidden' });
        },
      });

    return tl;
  };
  const sunTheme = () => {
    let tl = gsap.timeline({});

    tl.to('#lampSparksMoon', { duration: 0.3, fill: '#ffd000' })
      .to('#lampSparksHeart', { duration: 0.3, fill: '#ffd000' })
      .to('#lampLightLampa1', { fill: '#996100', ease: Bounce.easeInOut })
      .to(
        '#lampLightLampa2',
        {
          fill: '#ffae22',
          ease: Bounce.easeInOut,
        },
        '-=0.7'
      )
      .to(
        '#lampSparksMoon',
        {
          fill: '#ffa600',
          ease: Bounce.easeInOut,
        },
        '-=0.6'
      )
      .to('#sunTheme', {
        duration: 50,
        motionPath: {
          path: '#sunThemePath',
          align: '#sunThemePath',
          alignOrigin: [0.5, 0.5],
        },
        onStart: () => {
          gsap.set('#sunTheme', { visibility: 'visible' });
        },
        onComplete: () => {
          gsap.set('#sunTheme', { visibility: 'hidden' });
        },
      });

    return tl;
  };

  master.add('theme');
  master.add(heartTheme());
  master.add(moonTheme(), 'theme+=5');
  master.add(sunTheme(), 'theme+=9');

  return master;
};
