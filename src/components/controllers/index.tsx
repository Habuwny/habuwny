import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { Sides } from "./sides";
import { MenuIcon } from "./menuIcon";
import { Menu } from "./Menu";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { portfolioAnimation } from "../../services/animation/components/controllers/portfolioAnimation";
import { useTypedSelector } from "../../hooks";

export const Controllers = () => {
  const tls = useTypedSelector((state) => state.tls);
  const [width, setWidth] = useState<number>(window.innerWidth);
  let loc = useLocation().pathname;

  useEffect(() => {
    console.log(tls, "tls");
    if (loc === "/") {
      if (tls.portfolio_side.tl.paused()) {
        tls.portfolio_side.tl.resume();
      }
    } else {
      tls.portfolio_side.tl.pause();
      gsap.set(".controllers_sides", { visibility: "hidden" });
    }
    const onResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [useLocation().pathname]);
  return (
    <div>
      <div className={"controllers_menu"}>
        <MenuIcon />
      </div>
      <div className={"controllers_sides"}>
        <Sides />
      </div>
      <div className={"logo"}>
        <Logo width={width / 10} height={width / 10} />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};
