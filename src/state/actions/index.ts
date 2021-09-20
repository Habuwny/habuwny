import { ActionType } from "../action-types";
import { CurrentThemeType, MenuStateType, Theme, TimeLine } from "../theme";

export interface CreateTimeLineAction {
  type: ActionType.CREATE_TIMELINE;
  payload: TimeLine;
}
export interface CurrentThemeAction {
  type: ActionType.CURRENT_THEME;
  payload: CurrentThemeType;
}
export interface MenuStateAction {
  type: ActionType.MENU_STATE;
  payload: MenuStateType;
}

export type Action =
  | CreateTimeLineAction
  | CurrentThemeAction
  | MenuStateAction;
