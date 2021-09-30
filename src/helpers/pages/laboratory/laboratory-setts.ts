import gsap from "gsap";
import { themeColors } from "../../../infra/themes";
import { ThemeColorType } from "../../../infra/themes/colorTheme";
export const laboratorySetts = (theme: ThemeColorType) => {
  gsap.set(".page__laboratory", {
    backgroundColor: themeColors.common.bg.primary,
  });
};
