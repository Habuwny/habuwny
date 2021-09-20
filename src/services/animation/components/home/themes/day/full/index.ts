import gsap from 'gsap';
import { BG } from '../common/bg';
import { fillCharacter } from '../../commons/';
import { showBtn } from '../../commons/';
import { showFloor } from './showFloor';
import { beeHoney } from './beeHoney';
import { cloudThemes } from '../../commons';

export const dayFullAnimation = (back?: boolean) => {
  let master = gsap.timeline({});

  master.add(BG());
  master.add(fillCharacter(0.08, '#0049a4', 'url(#_Linear1)'), '<');
  master.add(showBtn('#0049a4'), '<');
  master.add(showFloor());
  master.add('theme');
  master.add('dev');
  master.add('back');
  master.add(cloudThemes('moon', 'heart'));
  master.add(beeHoney(), 'theme');

  if (back) return master.play('back');
  return master;
};
