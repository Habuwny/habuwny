import gsap from "gsap";
import { Back, Bounce } from "gsap/gsap-core";
export const cssHtmlLogoAnime = () => {
  let tl = gsap.timeline({});

  tl.add("start")
    .fromTo(
      ".html-cssBackRight",
      { rotate: 90, scale: 0, transformOrigin: "right bottom" },
      {
        duration: 5,
        repeat: -1,
        yoyo: true,
        repeatDelay: 4,
        rotate: 0,
        scale: 1,
        ease: Bounce.easeOut,
        transformOrigin: "right bottom",
      }
    )
    .fromTo(
      ".html-cssBackLeft",
      { rotate: -90, scale: 0, transformOrigin: "left bottom" },
      {
        duration: 5,
        repeat: -1,
        yoyo: true,
        repeatDelay: 4,
        rotate: 0,
        scale: 1,
        ease: Bounce.easeOut,
        transformOrigin: "left bottom",
      },
      "start"
    );

  return tl;
};
