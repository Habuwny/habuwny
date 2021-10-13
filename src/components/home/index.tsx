import { useEffect, useState } from "react";
import { Full } from "./themes/full";
import { Resize } from "./themes/resize";
import { useTypedSelector } from "../../hooks";
import gsap from "gsap";

export const HomeThemes = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const theme = useTypedSelector((state) => state.theme.currentTheme);

  useEffect(() => {
    const onResize = () => {
      if (width === 800) {
        gsap.to(".heartSizeThemes", { y: "+=120" });
      } else if (width < 800) {
        gsap.to(".heartSizeThemes", { y: 0 });
      }
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [theme, width]);
  const returnFull = () => {
    return <Full width={width} height={height} />;
  };
  const returnResize = () => {
    return <Resize width={width} height={height} />;
  };

  return (
    <div className={"intro"}>
      {width >= 960 ? returnFull() : returnResize()}
    </div>
  );
};
