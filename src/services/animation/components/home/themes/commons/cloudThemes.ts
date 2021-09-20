import gsap from 'gsap';
import { getSVgWH, getViewBox } from '../imports';

type Theme = 'heart' | 'sun' | 'moon';
export const cloudThemes = (theme1: Theme, theme2: Theme) => {
  const cloudMove = (theme: string, cloud: string) => {
    let themeW = getViewBox('.intro__theme').width;
    let cloudWidth = getSVgWH('#cloud1G', 'w');
    let xSpace = themeW + cloudWidth;
    let moveDuration = xSpace / 40;

    let tl = gsap.timeline({ repeat: -1, repeatRefresh: true });

    tl.add('start')
      .fromTo(
        `#${cloud}`,
        { visibility: 'hidden', opacity: 1, x: `-=${cloudWidth}` },
        { duration: moveDuration, visibility: 'visible', x: `+=${xSpace}` }
      )
      .fromTo(`#${cloud}`, { visibility: 'visible', opacity: 0 }, { x: 0 })
      .fromTo(
        `#${theme}Theme`,
        { visibility: 'hidden', opacity: 1 },
        {
          duration: moveDuration / 5,
          visibility: 'visible',
          onComplete: () => {
            gsap.to(`#${theme}Theme`, { opacity: 0 });
          },
          motionPath: {
            path: `#${theme}ThemePath`,
            align: `#${theme}ThemePath`,

            alignOrigin: [0.5, 0.5],
          },
        },
        `start+=${moveDuration / 5}`
      );

    return tl;
  };

  let master = gsap.timeline({});

  master.add('start');
  master.add(cloudMove(theme1, 'cloud1'));
  master.add(cloudMove(theme2, 'cloud2'), 'start+=10');

  return master;
};
