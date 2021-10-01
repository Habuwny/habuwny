import { LaboratoryCell } from "./cell";

export const LaboratoryCells = () => {
  return (
    <div className={"laboratoryCells"}>
      <LaboratoryCell
        hed={"Front-End"}
        body={"using react with typescript and webpack"}
        bottom={"React"}
        list={["React", "typescript", "redux", "webpack"]}
      />
      <LaboratoryCell
        hed={"Back-End"}
        body={"using nodejs with react components and typescript"}
        bottom={"NodeJs"}
        list={["nodeJS", "typescript", "react"]}
      />
      <LaboratoryCell
        hed={"Tools"}
        body={"set prettier on save with webstorm"}
        bottom={"Webstorm"}
        list={["webstorm"]}
      />
    </div>
  );
};
