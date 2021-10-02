import gsap from "gsap";
export type Types =
  | "default_full"
  | "default_resize"
  | "heart_full"
  | "heart_resize"
  | "night_resize"
  | "night_full"
  | "day_full"
  | "day_resize"
  | "default"
  | "logo"
  | "portfolio_side";
export type CategoryHead =
  | "all"
  | "front-end"
  | "back-end"
  | "tools"
  | "others";
export type AllCategorySub = "all";
export type FrontCategorySub = "js" | "react" | "html" | "css";
export type BackCategorySub =
  | "nodeJs"
  | "php"
  | "python"
  | "mongoDB"
  | "sql"
  | "postgres";
export type ToolsCategorySub = "webstorm" | "github" | "pyCharm" | "vsCode";
export type OthersCategorySub = "all";

export type CategorySub =
  | FrontCategorySub
  | BackCategorySub
  | ToolsCategorySub
  | AllCategorySub
  | OthersCategorySub;

export interface CurrentThemeType {
  currentTheme: Types;
}
export interface MenuStateType {
  visibility: "visible" | "hidden";
}
export interface TimeLine {
  theme: Types;
  tl: gsap.core.Timeline;
}
export interface Category {
  head: CategoryHead;
  sub: CategorySub;
}