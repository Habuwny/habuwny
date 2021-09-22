import gsap from "gsap";
import { ColorTheme } from "../../../infra/themes/colorTheme";

export const laboratorySetts = (theme: ColorTheme) => {
  gsap.set(".page__laboratory", { backgroundColor: theme.bg.primary });
};
