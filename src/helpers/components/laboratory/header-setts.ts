import gsap from "gsap";
import { ColorCommonTheme } from "../../../infra/themes/colorTheme";

export const laboratoryHeaderSetts = (theme: ColorCommonTheme) => {
  gsap.set(".heading-primary", { color: theme.text.quintuple });
  gsap.set(".laboratoryHeader__p", { color: theme.text.tertiary });
};
