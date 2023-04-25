import { applyMiddleware, combineReducers, compose, createStore, } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import { connectRoutes, LocationState } from "redux-first-router";
import thunk from "redux-thunk";
import ENV from "services";
import { RoutesMap } from "../routes";
import { Reducer as AuthReducer, State as AuthState } from "./auth";
import { Reducer as ConfigReducer, State as ConfigState } from "./config";
import { Reducer as ContextReducer, State as ContextState } from "./context";
import * as RootReducer from "./root";
import queryString from 'query-string'

export interface ApplicationState {
    page: string;
    AuthState: AuthState;
    ContextState: ContextState;
    ConfigState: ConfigState;
    location: LocationState;
}

const AllReducers = {
    AuthState: AuthReducer,
    ContextState: ContextReducer,
    ConfigState: ConfigReducer,
};

//#region Config Store, không sửa
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}

export default function ConfigStore(history: History | any) {
    const { reducer, middleware, enhancer } = connectRoutes(RoutesMap, {
        querySerializer: queryString
    });

    const windowIfDefined = typeof window === "undefined" ? null : (window as any);
    const composeEnhancers = ENV.PROFILE === "development" && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

    const rootReducer = combineReducers({ ...RootReducer, ...AllReducers, location: reducer });
    const middlewares = applyMiddleware(middleware, thunk);
    const enhancers = composeEnhancers(enhancer, middlewares);
    const store = createStore(rootReducer, enhancers);
    // const store = configureStore({reducer: rootReducer, enhancers: enhancers});
    return store;
}
//#endregion
