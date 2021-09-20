import gsap from 'gsap';
import { drawParticle } from '../../commons';
import { drawCharacterTL } from '../../commons';
import { fillCharacter } from '../../commons';
import { openLampSwitcher } from '../../commons';
import { openLight } from './openLight';
import { drawFlag } from '../../commons';
import { penToBtn } from '../../commons';
import { themes } from './themes';
import { lamp } from './lamp';

export const defaultResizeThemeAnimation = (back?: boolean) => {
  let master = gsap.timeline({});

  master.add(lamp());
  master.add(drawParticle(0.2), '<');
  master.add(drawCharacterTL(0.2), '<');
  master.add('switcher');
  master.add(fillCharacter(0.2, '#b219ab', '#000c1a'), '<');
  master.add(openLampSwitcher('resize'), 'switcher');
  master.add('flag');
  master.add(openLight());
  master.add(drawFlag(), 'flag');
  master.add(penToBtn(), '-=6');
  master.add('back');
  master.add(themes());

  if (back) return master.play('back');
  else return master;
};
