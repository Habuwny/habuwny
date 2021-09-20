import gsap from 'gsap';
import { Elastic, Power0 } from 'gsap/gsap-core';
import { RoughEase } from 'gsap/EasePack';
import { birdSing } from '../../imports';

export const birdFly = () => {
  let master = gsap.timeline({ repeat: -1, repeatDelay: 60 });
  const fly = (bird: string, path: string, duration: number) => {
    const onStart = () => {
      gsap.set('#setBirdHe', { visibility: 'hidden' });
    };
    const tl = gsap.timeline({ onStart });
    tl.fromTo(
      bird,
      { visibility: 'hidden' },
      {
        duration,
        visibility: 'visible',
        transformOrigin: '50% 50%',
        motionPath: {
          path: path,
          align: path,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        ease: Elastic.easeOut.config(0.5, 0.3),
        onComplete: birdSing,
      }
    );
    return tl;
  };
  const backHome = (bird: string) => {
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 60 });
    tl.fromTo(
      bird,
      { duration: 1.5, y: 0 },
      {
        duration: 1.5,
        repeat: 4,
        yoyo: true,
        repeatDelay: 1,
        y: '-=40',
        ease: RoughEase.ease.config({
          template: Power0.easeOut,
          strength: 1,
          points: 20,
          taper: 'none',
          randomize: true,
          clamp: false,
        }),
        onComplete: () => {
          gsap.to(bird, {
            duration: 1.5,
            y: 0,
          });
        },
      }
    );
    return tl;
  };

  master.add('star');
  master.set('#flyingBirdHe', { rotation: 0, scaleY: 1 });
  master.add(fly('#flyingBirdHe', '#path1', 10));
  master.add(fly('#flyingBirdHe', '#path2', 10), '+=15');
  master.add(fly('#flyingBirdHe', '#path3', 10), '+=15');
  master.add(fly('#flyingBirdHe', '#path4', 10), '+=15');
  master.add(fly('#flyingBirdHe', '#path5', 10), '+=15');
  master.add(fly('#flyingBirdHe', '#path6', 10), '+=15');
  master.set('#flyingBirdHe', { rotation: 200, scaleY: -1 });
  master.add(fly('#flyingBirdHe', '#path7', 50), '+=15');
  master.add(backHome('#birdShe'), '+=15');
  return master;
};
