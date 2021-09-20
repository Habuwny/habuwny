import gsap from "gsap";
import { commonFullSetts } from "./common-full-setts";
import { enums } from "../../../../services/animation/components/home/themes/commons";

export const defaultFullSetts = () => {
  commonFullSetts();
  gsap.set(".intro__defaultFull", { visibility: "visible" });

  const { themes, themesPaths } = enums();
  //General
  gsap.set("#defaultBG", { y: 0 });
  gsap.set("#defaultBG", { x: 0 });
  gsap.set("#common_full-IntroText", { visibility: "hidden" });
  gsap.set("#TempPen", { cursor: "pointer" });
  gsap.set("#BtnFullBigBox", { cursor: "pointer" });
  gsap.set("#BtnBigBox, #BtnSmallBox", { visibility: "hidden" });

  //Themes
  gsap.set(themes, { visibility: "hidden" });
  gsap.set(themesPaths, { opacity: 0 });
};
