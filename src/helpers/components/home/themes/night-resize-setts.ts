import gsap from 'gsap';
import {  getViewBox } from '../../../../tools';
import { commonResizeSetts } from './common-resize-setts';

export const nightResizeSetts = () => {
  commonResizeSetts();
  gsap.set('.intro__nightResize', { visibility: 'visible' });

  const { width } = getViewBox('.intro__theme');

  gsap.set('#heartTheme, #sunTheme', { visibility: 'hidden' });
  gsap.set('#TempPen', { visibility: 'hidden' });
  gsap.set('#bigMoon', { visibility: 'visible' });
  gsap.set('#nightBG', { x: `-=${width}` });
  gsap.set('#dayBG', { x: `-=${width}` });
  gsap.set('#heartBG', { x: `-=${width}` });
  gsap.set('#defaultBG', { x: 0, y: 0 });
  gsap.set('#common_resize-IntroText', { fill: '#fff' });
  gsap.set('#treesFloor', {
    autoAlpha: 0,
    y: `+=${100}`,
  });
  gsap.set('#trees', {
    autoAlpha: 0,
    scaleY: 0.1,
    y: '+=200',
    transformOrigin: 'bottom center',
  });
  gsap.set('#stars', {
    autoAlpha: 0,
    opacity: 0.3,
  });
  gsap.set('#bigMoon', {
    scale: 0.1,
    transformOrigin: 'center center',
  });
  gsap.set('#metro1', {
    autoAlpha: 0,
    yPercent: -100,
  });
};
