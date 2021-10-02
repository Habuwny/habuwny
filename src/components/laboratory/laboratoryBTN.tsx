import { Button } from "../common/btn";
import { MouseEventHandler } from "react";
import { CategoryHead } from "../../state/types";

interface LaboratoryBTNProps {
  name?: string;
  onMouseOver?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onClick?: MouseEventHandler;
  type: CategoryHead;
  createREF: any;
}
export const LaboratoryBTN = ({
  name,
  onMouseLeave,
  onMouseOver,
  onClick,
  type,
  createREF,
}: LaboratoryBTNProps) => {
  return (
    <Button
      createREF={createREF}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      type={type}
      classes={`customBTN-${type} customBTN`}
      padding={"10px 15px"}
      border={"none"}
      color={"#833a94"}
      radius={"5px"}
      width={"100%"}
      children={name}
    />
  );
};
