import gsap from "gsap";
import { ColorTheme } from "../../../infra/themes/colorTheme";

export const laboratoryCatagorySetts = (theme: ColorTheme) => {
  gsap.set(".roundedButton__small", {
    backgroundColor: theme.ui.primary,
    color: theme.text.primary,
  });
};
