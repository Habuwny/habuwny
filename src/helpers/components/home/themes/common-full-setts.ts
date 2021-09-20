import gsap from 'gsap';

export const commonFullSetts = () => {
  //General
  gsap.set('.intro__commonFull', { visibility: 'visible' });
  gsap.set('.intro__commonResize', { visibility: 'hidden' });

  gsap.set('.intro__heartResize', { visibility: 'hidden' });
  gsap.set('.intro__nightResize', { visibility: 'hidden' });
  gsap.set('.intro__dayResize', { visibility: 'hidden' });
  gsap.set('.intro__defaultResize', { visibility: 'hidden' });
  gsap.set('.intro__themes', { visibility: 'hidden' });

  gsap.set('.intro__heartFull', { visibility: 'hidden' });
  gsap.set('.intro__nightFull', { visibility: 'hidden' });
  gsap.set('.intro__dayFull', { visibility: 'hidden' });
  gsap.set('.intro__defaultFull', { visibility: 'hidden' });

  gsap.set('#BtnTextBig, #BtnTextSmall', {
    cursor: 'pointer',
    autoAlpha: 0,
    y: '+=500',
  });
  gsap.set('#Name', { visibility: 'hidden' });
};
