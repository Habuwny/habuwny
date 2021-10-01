import gsap from "gsap";
import { themeColors } from "../../../infra/themes";
export const laboratoryCellSetts = (theme: string) => {
  gsap.set(".laboratoryCell__hed", {
    backgroundColor: themeColors[theme].ui.laboratory.cell.frontEndHead,
  });
  gsap.set(".laboratoryCell__body", {
    // backgroundColor: themeColors[theme].ui.primary,
    backgroundColor: themeColors[theme].ui.laboratory.cell.body,
  });
};
