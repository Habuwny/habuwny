import { useTypedSelector } from "../../hooks";
import { themColor } from "../../infra/themes";
import { useEffect } from "react";
import { laboratoryHeaderSetts } from "../../helpers/components/laboratory/header-setts";

export const LaboratoryHeader = () => {
  const theme = useTypedSelector((state) => state.theme.currentTheme);
  const colors = themColor(theme, true);
  useEffect(() => {
    laboratoryHeaderSetts(colors);
  }, []);
  return (
    <div className={"laboratoryHeader"}>
      <h2 className={"heading-primary"}>laboratory</h2>
      <p className={"laboratoryHeader__p paragraph-primary"}>
        The laboratory includes some coding in Front-end and Back-end, it also
        includes my favorites coding tools.{" "}
      </p>
      {/*<p className={"laboratoryHeader__p paragraph-primary"}></p>*/}
    </div>
  );
};
