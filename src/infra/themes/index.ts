import { useTypedSelector } from "../../hooks";

import { dayColors } from "./day/colors";
import { nightColors } from "./night/colors";
import { heartColors } from "./heart/colors";
import { defaultColors } from "./default/colors";

const themColor = () => {
  const theme = useTypedSelector((state) => state.theme.currentTheme);
  let colors;
  if (
    theme === "default_full" ||
    theme === "default_resize" ||
    theme === "default"
  ) {
    colors = defaultColors;
  } else if (theme === "day_full" || theme === "day_resize") {
    colors = dayColors;
  } else if (theme === "night_full" || theme === "night_resize") {
    colors = nightColors;
  } else if (theme === "heart_full" || theme === "heart_resize") {
    colors = heartColors;
  } else colors = defaultColors;

  return colors;
};
