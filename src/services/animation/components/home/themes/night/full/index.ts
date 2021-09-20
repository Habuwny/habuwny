import gsap from 'gsap';
import { BG, showFloor, shineStars } from '../common';
import { fillCharacter, showBtn, cloudThemes } from '../../commons';
import { showStars } from '../common/showStars';
import { meteors } from './meteors';

export const nightFullAnimation = (back?: boolean) => {
  let master = gsap.timeline({});

  master.add(BG());
  master.add(fillCharacter(0.05, '#068d80', 'url(#_Linear12345678)'), '<');
  master.add(showBtn('#068d80'), '<');
  master.add(showFloor());
  master.add('repeat');
  master.add(showStars());
  master.add('back');
  master.add(meteors(), 'repeat+=20');
  master.add(shineStars(), '<');
  master.add('dev');
  master.add(cloudThemes('sun', 'heart'), 'repeat+=20');

  if (back) return master.play('back');
  return master;
};
