import gsap from "gsap";
import { enums } from "../../../../services/animation/components/home/themes/commons";
export const scaleTheme = (width: number, theme: string) => {
  const sc = window.innerWidth / width / 5;
  const { themes } = enums();

  gsap.set(themes[0], { scale: 1 + sc });
  gsap.set(themes[1], { scale: 1 + sc });
  gsap.set(themes[2], { scale: 1 + sc });
};
