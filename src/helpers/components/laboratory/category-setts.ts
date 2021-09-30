import gsap from "gsap";
import { themeColors } from "../../../infra/themes";
import { ThemeTypes } from "../../../infra/themes/themesTypes";
export const laboratoryCategorySetts = (theme: ThemeTypes) => {
  gsap.set(".roundedButton__small", {
    // @ts-ignore
    backgroundColor: themeColors[theme].ui.primary,
    color: themeColors[theme].text.primary,
  });
};
