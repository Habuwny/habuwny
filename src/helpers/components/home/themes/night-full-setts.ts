import { commonFullSetts } from './common-full-setts';
import gsap from 'gsap';
import { getViewBox } from '../../../../tools';
import { getSVgWH } from '../../../../tools/';

export const nightFullSetts = () => {
  commonFullSetts();
  gsap.set('.intro__nightFull', { visibility: 'visible' });


  const { height } = getViewBox('.intro__theme');
  const meteor1 = getSVgWH('#meteor1', 'h');
  const meteor2 = getSVgWH('#meteor2', 'h');
  const meteor4 = getSVgWH('#meteor3', 'h');

  gsap.set('#meteor1', { y: `-=${meteor1}` });
  gsap.set('#meteor2', { y: `-=${meteor2}` });
  gsap.set('#meteor3', { y: `-=${meteor4}` });
  gsap.set('.starShine', { opacity: 0.6 });
  gsap.set('#heartTheme, #sunTheme', { visibility: 'visible' });
  gsap.set('#bigMoon', { visibility: 'visible' });
  gsap.set('#heartTheme', { visibility: 'hidden' });
  gsap.set('#sunTheme', { visibility: 'hidden' });
  gsap.set('#TempPen', { visibility: 'hidden' });
  gsap.set('#dayBG', { y: `-=${height}` });
  gsap.set('#heartBG', { y: `-=${height}` });
  gsap.set('#stars', { opacity: 0.1 });
  gsap.set('#common_full-IntroText', { visibility: 'visible', fill: '#fff' });
  gsap.set('#satellitePath, #Pen', {
    opacity: 0,
  });
};
