import gsap from 'gsap';
import { getViewBox } from '../../../../tools';
import { commonResizeSetts } from './common-resize-setts';

export const dayResizeSetts = () => {
  commonResizeSetts();

  gsap.set('.intro__dayResize', { visibility: 'visible' });

  const {  width } = getViewBox('.intro__theme');


  gsap.set('#dayBG', { x: `-=${width}` });
  gsap.set('#dayBG', { y: 0 });
  gsap.set('#heartBG', { x: `+=${width}` });
  gsap.set('#BigSun', { visibility: 'visible' });

  gsap.set('#common_resize-IntroText', { visibility: 'visible', fill: '#fff' });
  gsap.set('#littleTrees', {
    autoAlpha: 0,
    scaleY: 0.1,
    y: '+=200',
    transformOrigin: 'bottom center',
  });
};
