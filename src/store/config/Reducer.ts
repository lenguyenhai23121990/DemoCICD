import { Reducer as ReduxReducer } from "redux";
import { AppThunkAction } from "..";
import InitState from "./InitState";
import { MainMenu, State as AppState } from "./Models";
import { ActionType } from "./ActionType";
interface MenuAction {
  type: string;
  menu: MainMenu[];
}
interface ThemeAction {
  type: string;
  theme: any;
}
interface ToastAction {
  type: string;
  toastRef: any;
}
type KnownAction = MenuAction | ThemeAction | ToastAction;
export const ActionCreators = {
  ChangeTheme: (theme: any, type: any): AppThunkAction<KnownAction> =>
    (dispatch, getState) => {
      let currentTheme = getState()?.ConfigState?.theme;
      currentTheme = {
        ...currentTheme,
        [type]: theme
      }
      dispatch({
        type: ActionType.CHANGE_THEME,
        theme: currentTheme
      });
    },
  ToastCreator: (toastRef: any): AppThunkAction<KnownAction> =>
    (dispatch, getState) => {
      dispatch({
        type: ActionType.TOAST,
        toastRef: toastRef
      });
    },
};
//#endregion
const initState = InitState;

export const Reducer: ReduxReducer<AppState, KnownAction> = (
  state: AppState | undefined,
  incomingAction: KnownAction
): AppState => {
  if (state === undefined) {
    return initState;
  }
  let action;
  switch (incomingAction.type) {
    case ActionType.MENUS: {
      action = incomingAction as MenuAction;
      return {
        ...state,
        apps: action.menu,
      } as AppState;
    }
    case ActionType.CHANGE_THEME: {
      action = incomingAction as MenuAction;
      return {
        ...state,
        // theme: action.theme
      } as AppState;
    }
    case ActionType.TOAST: {
      action = incomingAction as ToastAction;
      let res = {
        ...state,
        toastRef: action.toastRef
      } as AppState;
      return res;
    }
    default:
      return {
        ...state,
      };
  }
};
