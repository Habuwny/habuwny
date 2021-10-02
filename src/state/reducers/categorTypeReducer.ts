import { Action } from "../actions";
import { ActionType } from "../action-types";
import { CategoryHead, CategorySub } from "../types";

interface CurrentCategoryState {
  head: CategoryHead;
  sub: CategorySub;
}

const initialState: CurrentCategoryState = { head: "all", sub: "all" };

const reducer = (
  state: CurrentCategoryState = initialState,
  action: Action
): CurrentCategoryState => {
  switch (action.type) {
    case ActionType.Category_STATE:
      return { head: action.payload.head, sub: action.payload.sub };
    default:
      return state;
  }
};
export default reducer;
