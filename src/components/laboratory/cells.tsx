import { LaboratoryCell } from "./cell";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks";
import { locCellsData } from "../../helpers/components/laboratory";

export const LaboratoryCells = () => {
  const currCategory = useTypedSelector((state) => state.category);
  const [currCells, setCurrCells] = useState<any>(locCellsData);

  useEffect(() => {
    const cells = locCellsData.filter((cell) => {
      if (currCategory.head === "showAll") return locCellsData;
      return cell.type === currCategory.head;
    });
    setCurrCells(cells);
  }, [currCategory]);
  return (
    <div className={"laboratoryCells"}>
      {currCells.map((cell: any) => {
        return (
          <LaboratoryCell
            hed={cell.hed}
            body={cell.body}
            bottom={cell.bottom}
            list={cell.list}
          />
        );
      })}
    </div>
  );
};
