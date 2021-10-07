import gsap from "gsap";
import { themeColors } from "../../../infra/themes";
export const laboratoryCellSetts = (theme: string, tape: string) => {
  console.log(tape);

  gsap.set(".laboratoryCell__Front-End", {
    backgroundColor: themeColors.common.ui.laboratory.cell.frontEnd.head,
    color: "#EDEDED",
  });
  gsap.set(".laboratoryCell__Back-End", {
    backgroundColor: themeColors.common.ui.laboratory.cell.backEnd.head,
    color: "#EDEDED",
  });

  gsap.set(".laboratoryCell__body", {
    backgroundColor: themeColors[theme].ui.laboratory.cell.frontEnd.body,
  });
  gsap.set(".laboratoryCell__React, .laboratoryCell__body__tools-react", {
    backgroundColor: themeColors.common.ui.laboratory.cell.common.react,
  });
  gsap.set(
    ".laboratoryCell__Javascript, .laboratoryCell__body__tools-javascript",
    {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.js,
    }
  );
  gsap.set(".laboratoryCell__Css-Scss, .laboratoryCell__body__tools-css", {
    backgroundColor: themeColors.common.ui.laboratory.cell.common.css,
  });
  gsap.set(".laboratoryCell__Html, .laboratoryCell__body__tools-html", {
    backgroundColor: themeColors.common.ui.laboratory.cell.common.html,
  });
  gsap.set(".laboratoryCell__Webpack, .laboratoryCell__body__tools-webpack", {
    backgroundColor: themeColors.common.ui.laboratory.cell.common.webpack,
  });
};
