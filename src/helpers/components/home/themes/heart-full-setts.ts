import gsap from "gsap";
import { getViewBox } from "../../../../tools";
import { commonFullSetts } from "./common-full-setts";

export const heartFullSetts = () => {
  commonFullSetts();
  const { height } = getViewBox(".intro__theme");
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
  gsap.set(".intro__heartFull", { visibility: "visible" });

  gsap.set("#common_full-IntroText", { visibility: "visible", fill: "#fff" });
  gsap.set("#TempPen", { visibility: "hidden" });
  gsap.set("#moonTheme, #sunTheme", { visibility: "hidden" });
  gsap.set(hearts, { visibility: "visible" });
  gsap.set("#heartBG", { y: `-=${height}`, x: 0 });
  gsap.set("#defaultBG", { x: 0, y: 0 });

  // gsap.set("#themesPaths", { visibility: "visible" });
  gsap.set("#Pen", { opacity: 0 });
  gsap.set("#Name", { fill: "#fff" });
  gsap.set("#treesFloor", { autoAlpha: 0, y: "+=100" });
  gsap.set("#littleTrees, #flowers", {
    autoAlpha: 0,
    scaleY: 0.1,
    y: "+=200",
    transformOrigin: "bottom center",
  });
  gsap.set("#trees, #Birds", {
    autoAlpha: 0,
    scaleY: 0.1,
    transformOrigin: "bottom center",
  });
};
