import gsap from 'gsap';
import { heartBG, heartsLight, hearts, showFloor } from '../common';
import { showBtn, heartThemes, fillCharacter } from '../../commons';

export const heartResizeThemeAnimation = (back?: boolean) => {
  let master = gsap.timeline({});

  master.add(heartBG());
  master.add(fillCharacter(0.1, '#891249', 'url(#_Linear1)'), '<');
  master.add(showBtn('#891249'), '<');
  master.add(showFloor());
  master.add(hearts());
  master.add('repeat');
  master.add('back');
  master.add(heartsLight());
  master.add(heartThemes(), 'repeat+=4');

  if (back) return master.play('back');
  return master;
};
