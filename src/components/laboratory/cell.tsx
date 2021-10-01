import { ReactLogo } from "../../assets/react-logo";
import * as React from "react";
import { useEffect } from "react";
import { laboratoryCellSetts } from "../../helpers/components/laboratory/cell-setts";
import { useTypedSelector } from "../../hooks";
import { CellBottomLogo } from "../../helpers/components/laboratory/cellBottomLogo";
import gsap from "gsap";

interface LaboratoryCellInterface {
  hed: string;
  body: string;
  list: string[];
  bottom: string;
}
export const LaboratoryCell = ({
  hed,
  body,
  bottom,
  list,
}: LaboratoryCellInterface) => {
  const theme = useTypedSelector((state) => state.theme.currentTheme).split(
    "_"
  )[0];

  useEffect(() => {
    laboratoryCellSetts(theme);
    gsap
      .timeline()
      .fromTo(
        "#JsLogo",
        { durationL: 3, drawSVG: "0", delay: 0.5 },
        { durationL: 3, drawSVG: "100% 100%", delay: 0.5 }
      );
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={"laboratoryCell"}>
      <div className={"laboratoryCell__hed"}>{hed}</div>
      <div className={"laboratoryCell__body"}>
        <span className={"laboratoryCell__body-title"}>{body}</span>
        <div className={"laboratoryCell__body__tools"}>
          {list.map((tool, i) => {
            return (
              <span
                key={"laboratoryCell__body__tools-${i+1}"}
                className={`laboratoryCell__body__tool laboratoryCell__body__tools-${
                  i + 1
                }`}
              >
                {tool}
              </span>
            );
          })}
        </div>
      </div>
      <div className={"laboratoryCell__bottom"}>
        {/*<ReactLogo />*/}
        <CellBottomLogo tool={bottom} />
        <span>{bottom}</span>
      </div>
    </div>
  );
};
