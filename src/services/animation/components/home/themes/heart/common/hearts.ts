import gsap from 'gsap'
import { Back } from 'gsap/gsap-core';

export const hearts = () => {
  let tl = gsap.timeline({})

  tl.fromTo('#hearts', {autoAlpha: 0, y: '-=1000'}, {duration: 2,autoAlpha: 1, y: 0, ease: Back.easeOut})

  return tl
}