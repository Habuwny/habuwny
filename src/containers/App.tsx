import React from "react";
import { Home } from "../pages/Home";
import { Switch, Route } from "react-router-dom";

import gsap from "gsap/gsap-core";
import {
  DrawSVGPlugin,
  EasePack,
  MorphSVGPlugin,
  MotionPathPlugin,
  PhysicsPropsPlugin,
  Physics2DPlugin,
  MotionPathHelper,
} from "../services/plugins";
import { Controllers } from "../components/controllers";
import { Laboratory } from "../pages/Laboratory";

gsap.registerPlugin(
  DrawSVGPlugin,
  PhysicsPropsPlugin,
  Physics2DPlugin,
  EasePack,
  MorphSVGPlugin,
  MotionPathPlugin,
  MotionPathHelper
);
export const App = () => {
  return (
    <div className={"app"}>
      <Controllers />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/laboratory"} component={Laboratory} />
      </Switch>
    </div>
  );
};
