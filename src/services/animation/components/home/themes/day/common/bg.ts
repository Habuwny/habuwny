import gsap from 'gsap';
import { getViewBox } from '../../imports';

export const BG = () => {
  let tl = gsap.timeline({});
  const { width } = getViewBox('.intro__theme');

  tl.fromTo(
    '#bigSun',
    {
      scale: 0.1,
      transformOrigin: 'center center',
    },
    {
      duration: 3.5,
      scale: 1,
      transformOrigin: 'center center',
    }
  )
    .to(
      '#dayBG',
      {
        duration: 2,
        x: 0,
      },
      '<'
    )
    .to('#defaultBG', { duration: 2, x: `+=${width}` }, '<');

  return tl;
};
