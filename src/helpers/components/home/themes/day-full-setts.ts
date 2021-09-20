import { commonFullSetts } from "./common-full-setts";
import gsap from "gsap";
import { getViewBox } from "../../../../tools";

export const dayFullSetts = () => {
  commonFullSetts();

  gsap.set(".intro__dayFull", { visibility: "visible" });

  const { width } = getViewBox(".intro__theme");

  gsap.set("#Pen", { opacity: 0 });
  gsap.set("#TempPen", { visibility: "hidden" });
  gsap.set("#beeWithHoney", { autoAlpha: 0 });
  gsap.set("#dayBG", { x: `-=${width}`, y: 0 });

  gsap.set("#heartBG", { x: `+=${width}` });
  gsap.set("#defaultBG", { y: 0, x: 0 });
  gsap.set("#common_full-IntroText", { visibility: "visible", fill: "#fff" });
  gsap.set("#treesFloor", {
    autoAlpha: 0,
    y: `+=${100}`,
  });
  gsap.set("#littleTrees, #flowers", {
    autoAlpha: 0,
    scaleY: 0.1,
    y: "+=200",
    transformOrigin: "bottom center",
  });
  gsap.set("#bigTrees", {
    autoAlpha: 0,
    scaleY: 0.1,
    transformOrigin: "bottom center",
  });
  gsap.set("#beesHome", {
    autoAlpha: 0,
    scaleY: 0.1,
    transformOrigin: "top center",
  });
  gsap.set("#beeFly", {
    autoAlpha: 0,
    scale: 0.1,
    transformOrigin: "center center",
  });
  gsap.set("#BigSun", {
    visibility: "visible",
  });
};
