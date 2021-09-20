import gsap from "gsap";
export type Theme =
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
export interface CurrentThemeType {
  currentTheme: Theme;
}
export interface MenuStateType {
  visibility: "visible" | "hidden";
}
export interface TimeLine {
  theme: Theme;
  tl: gsap.core.Timeline;
}
