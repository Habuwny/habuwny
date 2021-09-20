import gsap from 'gsap';

export const commonResizeSetts = () => {
  //General
  gsap.set('.intro__commonResize', { visibility: 'visible' });
  gsap.set('.intro__commonFull', { visibility: 'hidden' });

  gsap.set('.intro__heartResize', { visibility: 'hidden' });
  gsap.set('.intro__nightResize', { visibility: 'hidden' });
  gsap.set('.intro__dayResize', { visibility: 'hidden' });
  gsap.set('.intro__defaultResize', { visibility: 'hidden' });

  gsap.set('.intro__heartFull', { visibility: 'hidden' });
  gsap.set('.intro__nightFull', { visibility: 'hidden' });
  gsap.set('.intro__dayFull', { visibility: 'hidden' });
  gsap.set('.intro__defaultFull', { visibility: 'hidden' });

  gsap.set('#BtnTextBig, #BtnTextSmall', { autoAlpha: 0, y: '+=500' });
};
