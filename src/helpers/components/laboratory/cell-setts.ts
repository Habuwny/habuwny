import gsap from "gsap";
import { themeColors } from "../../../infra/themes";
export const laboratoryCellSetts = (theme: string) => {
  gsap.set(".laboratoryCell__hed", {
    backgroundColor: themeColors[theme].ui.laboratory.cell.frontEnd.head,
  });
  gsap.set(".laboratoryCell__body", {
    backgroundColor: themeColors[theme].ui.laboratory.cell.frontEnd.body,
  });
  gsap.set(".laboratoryCell__React", {
    backgroundColor: themeColors[theme].ui.laboratory.cell.frontEnd.react,
  });
  gsap.set(".laboratoryCell__Javascript", {
    backgroundColor: themeColors[theme].ui.laboratory.cell.frontEnd.js,
  });
  gsap.set(".laboratoryCell__Css-Scss", {
    backgroundColor: themeColors[theme].ui.laboratory.cell.frontEnd.css,
  });
  gsap.set(".laboratoryCell__Html", {
    backgroundColor: themeColors[theme].ui.laboratory.cell.frontEnd.html,
  });
};
