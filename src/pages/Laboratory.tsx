import { useTypedSelector } from "../hooks";
import { themColor } from "../infra/themes";
import { laboratorySetts } from "../helpers/pages/laboratory/laboratory-setts";
import { useEffect } from "react";
import { LaboratoryComponents } from "../components/laboratory";

export const Laboratory = () => {
  const theme = useTypedSelector((state) => state.theme.currentTheme);
  const colors = themColor(theme);
  useEffect(() => {
    laboratorySetts(colors);
  }, []);
  return (
    <div className={"page__laboratory"}>
      <LaboratoryComponents />
    </div>
  );
};
