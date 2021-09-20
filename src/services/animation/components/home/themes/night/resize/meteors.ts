import gsap from 'gsap';
export const meteors = () => {
  let tl = gsap.timeline({ repeat: -1 });

  tl.fromTo(
    '#metro1',
    { opacity: 1, scale: 1 },
    {
      duration: 9,
      opacity: 0,
      scale: 0.2,
      autoAlpha: 1,
      y: '+=4000',
      x: '-=4000',
    }
  );
  return tl;
};
