import { ReactLogo } from "../../../assets/react-logo";
import { JSLogo } from "../../../assets/js-logo";
import { NodeJsLogo } from "../../../assets/nodeJs-logo";
import { CSSLogo } from "../../../assets/css-logo";
import { HtmlLogo } from "../../../assets/html-logo";

interface BottomLogo {
  tool: string;
}
export const CellBottomLogo = ({ tool }: BottomLogo) => {
  if (tool === "React") {
    return <ReactLogo />;
  } else if (tool === "Javascript") {
    return <JSLogo />;
  } else if (tool === "NodeJs") {
    return <NodeJsLogo />;
  } else if (tool === "Css-Scss") {
    return <CSSLogo />;
  } else if (tool === "Html") {
    return <HtmlLogo />;
  }
  return <div>{""}</div>;
};
