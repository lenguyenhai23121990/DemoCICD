import { Reducer as ReduxReducer } from "redux";
import { AppThunkAction } from "..";
import InitState from "./InitState";
import { ActionType } from "./ActionType";
import { State as AppState } from "./Models";
// import axios from "axios";
import { AuthHeader } from ".";
import { MainMenu } from "store/config";
import ENV from "services";
import { UMSService } from "services";

interface MenuAction {
  type: string;
  menu: MainMenu[];
}
//#region declare actions
interface LoginRequestAction {
  type: string;
  user: string;
  password: string;
}
interface LoginSuccessAction {
  type: string;
  user: any;
}
interface LoginFailureAction {
  type: string;
  message: string;
}
interface LogoutAction {
  type: string;
}
interface RefreshRequestAction {
  type: string;
}
interface RefreshSuccessAction {
  type: string;
}
interface RefreshFailureAction {
  type: string;
}
interface GotoPageAction {
  type: string;
  payload?: any;
}

type KnownAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
  | MenuAction
  | GotoPageAction
  | RefreshRequestAction
  | RefreshSuccessAction
  | RefreshFailureAction
export const ActionCreators = {
  LoginRequest:
    (user: string, password: string): AppThunkAction<KnownAction> =>
      (dispatch, getState) => {
        console.log(getState())
        localStorage.removeItem("user")
        indexedDB.deleteDatabase("Demo")
        UMSService.signIn({
            userName: user,
            password: password,
            os: 'web',
            deviceId: 'pc'
          })
          .then(async (response) => {
            try {
              let user = response?.data
              localStorage.setItem("user", JSON.stringify(user));
              dispatch({
                type: "home",
              });
              // dispatch({
              //   type: "SET_USER_ROLES",
              //   payload: ["admin"]
              // });
              // window.location.href = "/"
            } catch (err) {
              console.log(err)
            }
          })
          .catch((error) => {
            alert("Đăng nhập thất bại!");
            dispatch({
              type: ActionType.LOGIN_FAILURE,
              message: error,
            });
          });
      },
  Logout:
    (): AppThunkAction<KnownAction> =>
      (dispatch, getState) => {
        UMSService.signOut()
          .then((response) => {
          })
          .catch((error) => {
            // console.log(error)
          })
        localStorage.removeItem("user")
        indexedDB.deleteDatabase("Demo")
        dispatch({
          type: ActionType.LOGOUT,
        })
        window.location.href = "/"
        // dispatch({
        //   type: "home",
        // })
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
    case ActionType.LOGIN_SUCCESS:
      action = incomingAction as LoginSuccessAction;
      console.log('LOGIN_SUCCESS')
      return {
        ...state, user: {roles: ["admin"]}
      };
    case ActionType.LOGOUT:
      action = incomingAction as LogoutAction;
      return {
        IsLoggedIn: false,
      };
    default:
      return {
        ...state,
      }
  }
};
