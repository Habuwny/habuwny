import { ReactLogo } from "../../../assets/react-logo";
import { JSLogo } from "../../../assets/js-logo";

interface BottomLogo {
  tool: string;
}
export const CellBottomLogo = ({ tool }: BottomLogo) => {
  if (tool === "React") {
    return <ReactLogo />;
  } else if (tool === "Javascript") {
    return <JSLogo />;
  }
  return <JSLogo />;
};
