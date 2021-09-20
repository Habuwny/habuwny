import gsap from 'gsap';

export const flash = (p: string) => {
  gsap.killTweensOf(p, { opacity: true });
  gsap.fromTo(
    p,
    { opacity: 1 },
    { duration: 0.07, opacity: Math.random(), repeat: -1 }
  );
};
