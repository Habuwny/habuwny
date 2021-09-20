import gsap from 'gsap';
import { cloudThemes, fillCharacter, showBtn } from '../../commons';
import { showFloor, BG, shineStars } from '../common';
import { meteors } from './meteors';

export const nightResizeAnimation = (back?: boolean) => {
  let master = gsap.timeline({});

  master.add(BG());
  master.add(fillCharacter(0.05, '#068d80', 'url(#_Linear22222)'), '<');
  master.add(showBtn('#068d80'), '<');
  master.add(showFloor());
  master.add('repeat');
  master.add(shineStars());
  master.add(meteors(), 'repeat+=20');
  master.add(cloudThemes('sun', 'heart'), 'repeat+=20');

  if (back) return master.play('back');
  return master;
};
