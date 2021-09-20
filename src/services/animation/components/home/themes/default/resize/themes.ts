import gsap from 'gsap';
import { Bounce } from 'gsap/gsap-core';
export const themes = () => {
  let master = gsap.timeline({ repeat: -1, repeatRefresh: true });
  const heartTheme = () => {
    let tl = gsap.timeline({});

    tl.to('#lampMoonLampa', { duration: 0.1, fill: '#eeba00' })
      .to('#lampMoonSet', { fill: '#eeba44' }, '<')
      .to('#lampSunLampa', { fill: '#eeba00' }, '<')
      .to('#lampSunSet', { fill: '#eeba44' }, '<')

      .to('#lampHeartLampa', { fill: '#aa1409', ease: Bounce.easeInOut })
      .to('#lampHeartSet', { fill: '#f44336' })
      .to('#heartTheme', {
        duration: 25,
        motionPath: {
          path: '#heartThemePath',
          align: '#heartThemePath',
          alignOrigin: [0.5, 0.5],
        },
        onStart: () => {
          gsap.set('#heartTheme', {
            visibility: 'visible',
          });
        },
        onComplete: () => {
          gsap.set('#heartTheme', { visibility: 'hidden' });
        },
      });
    return tl;
  };
  const moonTheme = () => {
    let tl = gsap.timeline({});

    tl.to('#lampHeartLampa', { duration: 0.1, fill: '#eeba00' })
      .to('#lampHeartSet', { fill: '#eeba44' }, '<')
      .to('#lampSunLampa', { fill: '#eeba00' }, '<')
      .to('#lampSunSet', { fill: '#eeba44' }, '<')

      .to('#lampMoonLampa', { fill: '#959cb3', ease: Bounce.easeInOut })
      .to('#lampMoonSet', { fill: '#958ab9' })
      .to('#moonTheme', {
        duration: 25,
        motionPath: {
          path: '#moonThemePath',
          align: '#moonThemePath',
          alignOrigin: [0.5, 0.5],
        },
        onStart: () => {
          gsap.set('#moonTheme', {
            visibility: 'visible',
          });
        },
        onComplete: () => {
          gsap.set('#moonTheme', { visibility: 'hidden' });
        },
      });
    return tl;
  };
  const sunTheme = () => {
    let tl = gsap.timeline({});
    tl.to('#lampHeartLampa', { duration: 0.1, fill: '#eeba00' })
      .to('#lampHeartSet', { fill: '#eeba44' }, '<')
      .to('#lampMoonLampa', { fill: '#eeba00' }, '<')
      .to('#lampMoonSet', { fill: '#eeba44' }, '<')

      .to('#lampSunLampa', { fill: '#eeba00', ease: Bounce.easeInOut })
      .to('#lampSunSet', { fill: '#ffd15b' })
      .to('#sunTheme', {
        duration: 25,
        motionPath: {
          path: '#sunThemePath',
          align: '#sunThemePath',
          alignOrigin: [0.5, 0.5],
        },
        onStart: () => {
          gsap.set('#sunTheme', {
            visibility: 'visible',
          });
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
