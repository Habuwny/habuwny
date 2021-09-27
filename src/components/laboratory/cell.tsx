import { ReactLogo } from "../../assets/react-logo";
import * as React from "react";

export const LaboratoryCell = () => {
  return (
    <div className={"laboratoryCell"}>
      <div className={"laboratoryCell__hed"}>Front-End</div>
      <div className={"laboratoryCell__body"}>
        <span className={"laboratoryCell__body-title"}>
          using webpack with react, redux and typescript
        </span>
        <div className={"laboratoryCell__body__tools"}>
          <span
            className={
              "laboratoryCell__body__tool laboratoryCell__body__tools-1"
            }
          >
            React
          </span>
          <span
            className={
              "laboratoryCell__body__tool laboratoryCell__body__tools-2"
            }
          >
            Redux
          </span>
          <span
            className={
              "laboratoryCell__body__tool laboratoryCell__body__tools-3"
            }
          >
            typescript
          </span>
          <span
            className={
              "laboratoryCell__body__tool laboratoryCell__body__tools-4"
            }
          >
            webpack
          </span>
        </div>
      </div>
      <div className={"laboratoryCell__bottom"}>
        <ReactLogo />
        <span>React</span>
      </div>
    </div>
  );
};
