import { useTypedSelector } from "../hooks";
import { themColor } from "../infra/themes/indexs";
import { laboratorySetts } from "../helpers/pages/laboratory/laboratory-setts";
import { useEffect } from "react";
import { LaboratoryComponents } from "../components/laboratory";

export const Laboratory = () => {
  const theme = useTypedSelector((state) => state.theme.currentTheme);
  useEffect(() => {
    // @ts-ignore
    laboratorySetts(theme.split("_")[0]);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={"page__laboratory"}>
      <LaboratoryComponents />
    </div>
  );
};
