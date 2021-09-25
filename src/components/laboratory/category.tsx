import { RoundedButton } from "../common/rounded-button";
import { useTypedSelector } from "../../hooks";
import { themColor } from "../../infra/themes";
import { useEffect } from "react";
import { laboratoryCatagorySetts } from "../../helpers/components/laboratory/catagory-setts";

export const LaboratoryCategory = () => {
  const theme = useTypedSelector((state) => state.theme.currentTheme);
  const colors = themColor(theme);
  useEffect(() => {
    laboratoryCatagorySetts(colors);
  }, []);
  return (
    <div className={"laboratoryCategory"}>
      <span>
        <RoundedButton name={"Show All"} type={"small"} />
      </span>
      <span>
        <RoundedButton name={"Front-End"} type={"small"} />
      </span>
      <span>
        <RoundedButton name={"Back-End"} type={"small"} />
      </span>
      <span>
        <RoundedButton name={"Tools"} type={"small"} />
      </span>
      <span>
        <RoundedButton name={"Others"} type={"small"} />
      </span>
    </div>
  );
};
