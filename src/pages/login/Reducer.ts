//import { AppThunkAction } from "store";
import { ActionType } from "./ActionType";
import { IState } from './InitState';

export interface UserChangeAction {
    type: string;
    user: string;
}

interface PasswordChangeAction {
    type: string;
    password: string;
}

type KnownAction =
    | UserChangeAction
    | PasswordChangeAction

export const ActionCreators = {
    UserChange: (dispatch: React.Dispatch<KnownAction>, user: string) => {
        dispatch({
            type: ActionType.USER_CHANGE,
            user: user,
        });
    },
    PasswordChange: (dispatch: React.Dispatch<KnownAction>, password: string) => {
        dispatch({
            type: ActionType.PASSWORD_CHANGE,
            password: password
        });
    },
}

export const reducer = (state: IState, incomingAction: KnownAction): IState => {
    let action;
    switch (incomingAction.type) {
        case ActionType.USER_CHANGE:
            action = incomingAction as UserChangeAction
            return {
                ...state,
                User: action.user
            }
        case ActionType.PASSWORD_CHANGE:
            action = incomingAction as PasswordChangeAction
            return {
                ...state,
                Password: action.password
            }
        default:
            return { ...state }
    }
}