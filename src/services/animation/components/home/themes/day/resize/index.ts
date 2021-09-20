import gsap from 'gsap';
import { fillCharacter } from '../../commons/';
import { showBtn } from '../../commons/';
import { BG } from '../common/bg';
import { showFloor } from './showFloor';
import { cloudThemes } from '../../commons';

export const dayResizeAnimation = (back?: boolean) => {
  let master = gsap.timeline({});

  master.add(BG());
  master.add(fillCharacter(0.1, '#0049a4', 'url(#_Linear11111)'), '<');
  master.add(showFloor());
  master.add(showBtn(), '<');
  master.add(cloudThemes('moon', 'heart'));

  if (back) return master.play('back');
  return master;
};
