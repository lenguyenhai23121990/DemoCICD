import { Reducer as ReduxReducer } from "redux";
import { AppThunkAction } from "..";
import { ActionType } from "./ActionType";
import InitState from "./InitState";
import { State as AppState } from "./Models";

//#region declare actions
interface ChangeThemeAction {
  type: string;
  theme: string;
}

interface SwitchRoleAction {
  type: string;
  roleId: number;
}

interface SwitchAppAction {
  type: string;
  app: string;
}

type KnownAction =
  | ChangeThemeAction
  | SwitchRoleAction
  | SwitchAppAction
//#endregion
//#region ActionCreators
export const ActionCreators = {
  ChangeTheme: (theme: string): AppThunkAction<KnownAction> => (
    dispatch,
    getState
  ) => {
    const actionState = getState();
    if (
      actionState &&
      actionState.ContextState &&
      actionState.ContextState.theme !== theme
    ) {
      dispatch({
        type: ActionType.CHANGE_LANGUAGE,
        theme: theme,
      });
    }
  },
  SwitchRole: (roleId: number): AppThunkAction<KnownAction> => (
    dispatch,
    getState
  ) => {
    const actionState = getState();
    if (
      actionState &&
      actionState.ContextState &&
      actionState.ContextState.user 
      // && actionState.ContextState.user.roleId !== roleId
    ) {
      dispatch({
        type: ActionType.SWITCH_ROLE,
        roleId: roleId
      });
    }
  },
  SwitchApp: (app: string): AppThunkAction<KnownAction> => (
    dispatch,
    getState
  ) => {
    const actionState = getState();
    if (
      actionState &&
      actionState.ContextState &&
      actionState.ContextState.app !== app
    ) {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: app,
      });
    }
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
    case ActionType.CHANGE_THEME:
      action = incomingAction as ChangeThemeAction;
      return {
        ...state,
        language: action.theme,
      };
    case ActionType.SWITCH_ROLE:
      action = incomingAction as SwitchRoleAction;
      return {
        ...state,
        user: state.user ? { ...state.user, roleId: action.roleId} : undefined,
      };
    case ActionType.SWITCH_APP:
      action = incomingAction as SwitchAppAction;
      return {
        ...state,
        app: action.app,
      };
    default:
      return {
        ...state,
      };
  }
};
