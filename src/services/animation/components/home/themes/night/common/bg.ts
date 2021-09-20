import gsap from 'gsap';
import { getViewBox } from '../../../../../../../tools';

export const BG = () => {
  let tl = gsap.timeline({});
  const { width } = getViewBox('.intro__theme');
  gsap.set('#nightBG', { x: `-=${width}` });

  tl.fromTo(
    '#bigMoon',
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
    .fromTo('#nightBG', { x: `-=${width}` }, { x: 0 }, '<')
    .fromTo('#defaultBG', { x: 0 }, { x: `+=${width}` }, '<');

  return tl;
};
