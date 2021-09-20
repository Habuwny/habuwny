export const clearParticles = (str: string) => {
  const els = document.querySelectorAll(str);
  els.forEach((el) => {
    el.parentNode!.removeChild(el);
  });
};
