import { ActionType } from "../action-types";
import { Theme } from "../theme";

type Visibility = "visible" | "hidden";
export const createTimeLine = (tl: any, theme: Theme) => {
  return {
    type: ActionType.CREATE_TIMELINE,
    payload: {
      tl,
      theme,
    },
  };
};
export const currentTheme = (currentTheme: Theme) => {
  return {
    type: ActionType.CURRENT_THEME,
    payload: {
      currentTheme,
    },
  };
};
export const menuState = (visibility: Visibility) => {
  return {
    type: ActionType.MENU_STATE,
    payload: {
      visibility,
    },
  };
};
