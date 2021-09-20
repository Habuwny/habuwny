import gsap from 'gsap';

import { commonResizeSetts } from './common-resize-setts';
import { enums } from '../../../../services/animation/components/home/themes/commons';

export const defaultResizeSetts = () => {
  commonResizeSetts();

  gsap.set('.intro__defaultResize', { visibility: 'visible' });

  gsap.set('#defaultBG', { y: 0 });

  const { themes, themesPaths } = enums();
  gsap.set(themes, { visibility: 'hidden' });
  gsap.set(themesPaths, { opacity: 0 });

};
