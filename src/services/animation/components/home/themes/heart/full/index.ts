import gsap from 'gsap';
import { heartBG, showFloor, hearts, heartsLight } from '../common';
import { fillCharacter, heartThemes, showBtn } from '../../commons/';
import { birdFly } from './birdFly';
export const heartFullThemeAnimation = (back?: boolean) => {
  let master = gsap.timeline({});

  master.add(heartBG());
  master.add(fillCharacter(0.05, '#891249', 'url(#_Linear1111)'), '<');
  master.add(showBtn('#891249'), '<');
  master.add(showFloor());
  master.add('dev');
  master.add(hearts());
  master.add('repeat');
  master.add('back');
  master.add(heartsLight());
  master.add(heartThemes(), 'repeat+=4');
  master.add(birdFly(), '<');

  if (back) return master.play('back');
  return master;
};
