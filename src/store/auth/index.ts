import { ActionType } from './ActionType';
import { ActionCreators, Reducer } from './Reducer';

const AuthHeader = () => {
    let user = JSON.parse(localStorage.getItem('user')??"");

    if (user && user.AccessToken) {
        return { 'Authorization': 'Bearer ' + user.AccessToken };
    } else {
        return {};
    }
}

export * from './Models';
export { ActionType, Reducer, ActionCreators, AuthHeader };