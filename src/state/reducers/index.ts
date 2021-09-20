import { combineReducers } from "redux";
import timeLineReducer from "./timelineReducer";
import currentThemeReducer from "./currentThemeReducer";
import menuState from "./menuIconReducer";
const reducers = combineReducers({
  tls: timeLineReducer,
  theme: currentThemeReducer,
  show: menuState,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
