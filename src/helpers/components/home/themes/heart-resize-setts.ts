import gsap from "gsap";
import { getViewBox } from "../../../../tools";
import { commonResizeSetts } from "./common-resize-setts";
export const heartResizeSetts = () => {
  commonResizeSetts();

  gsap.set(".intro__heartResize", { visibility: "visible" });

  const { width } = getViewBox(".intro__theme ");

  const hearts = [
    "#heart1",
    "#heart2",
    "#heart3",
    "#heart4",
    "#heart5",
    "#heart6",
    "#heart7",
    "#heart8",
  ];
  gsap.set("#heartBG", { y: `-=1000` });
  gsap.set("#moonTheme, #sunTheme", { visibility: "hidden" });
  gsap.set(hearts, { visibility: "visible" });
  // gsap.set("#themesPaths", { visibility: "visible" });
  gsap.set("#heartBG", { x: 0 });
  gsap.set("#defaultBG", { y: 0 });
  gsap.set("#defaultBG", { x: 0 });
  gsap.set("#dayBG", { y: `-=60000` });
  gsap.set("#treesFloor", { y: `+=100`, autoAlpha: 0 });
  gsap.set("#common_resize-IntroText", { fill: "#fff" });
  gsap.set("#heartsHoldRope", { x: `+=${width}`, autoAlpha: 0 });
  gsap.set("#littleTrees", {
    autoAlpha: 0,
    scaleY: 0.1,
    y: "+=200",
    transformOrigin: "bottom center",
  });
};
