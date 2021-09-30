import { randomId } from "../../tools";

interface ListProps {
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  list: string[];
}
export const CategoryBtnList = ({
  onMouseOver,
  onMouseLeave,
  list,
}: ListProps) => {
  return (
    <div
      key={randomId()}
      className={"laboratoryCategory__BtnList"}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
    >
      {list.map((item) => {
        return (
          <span
            key={`laboratoryCategory__BtnList-${item}`}
            className={`laboratoryCategory__BtnList-${item}`}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};
