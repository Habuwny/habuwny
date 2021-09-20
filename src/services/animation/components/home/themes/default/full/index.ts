import gsap from "gsap";
import { drawCharacterTL } from "../../commons";
import { drawParticle } from "../../commons";
import { openLampSwitcher } from "../../commons";
import { drawFlag } from "../../commons";
import { penToBtn } from "../../commons";
import { fillCharacter } from "../../commons";
import { openLight } from "./openLight";
import { nameToBio } from "../../commons";
import { lamp } from "./lamp";
import { themes } from "./themes";

export const defaultFullThemeAnimation = (back?: boolean) => {
  let master = gsap.timeline({});

  master.add(lamp());
  master.add(drawParticle(0.2), "<");
  master.add(drawCharacterTL(0.2), "<");
  master.add("switcher");
  master.add(fillCharacter(0.2, "#b219ab", "#000c1a"), "<");
  master.add(nameToBio());
  master.add(openLampSwitcher("full"), "switcher");
  master.add("flag");
  master.add(openLight(), "-=5");
  master.add(drawFlag(), "flag-=5");
  master.add(penToBtn(), "-=6");
  master.add("back");
  master.add(themes());

  if (back) return master.play("back");
  else return master;
};
