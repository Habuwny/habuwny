import { MongoDBLogo, PythonLogo, ReactLogo } from "../../../assets";
import { JSLogo } from "../../../assets";
import { NodeJsLogo } from "../../../assets";
import { CSSLogo } from "../../../assets";
import { HtmlLogo } from "../../../assets";

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
  } else if (tool === "MongoDB") {
    return <MongoDBLogo />;
  } else if (tool === "Python") {
    return <PythonLogo />;
  }
  return <div>{""}</div>;
};
