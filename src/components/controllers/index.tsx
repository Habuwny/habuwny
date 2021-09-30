import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { Sides } from "./sides";
import { MenuIcon } from "./menuIcon";
import { Menu } from "./Menu";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useTypedSelector } from "../../hooks";

export const Controllers = () => {
  const tls = useTypedSelector((state) => state.tls);
  const [width, setWidth] = useState<number>(window.innerWidth);
  let loc = useLocation().pathname;

  useEffect(() => {
    if (loc === "/") {
      if (tls.portfolio_side?.tl.paused()) {
        gsap.set(".controllers_sides-parts", { scale: 1 });
        tls.portfolio_side?.tl.resume();
      }
    } else {
      tls.portfolio_side?.tl.pause();
      gsap.set(".controllers_sides-parts", { scale: 0.005 });
    }
    const onResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [useLocation().pathname]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <div className={"controllers_menu"}>
        <MenuIcon />
      </div>
      <div>
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
