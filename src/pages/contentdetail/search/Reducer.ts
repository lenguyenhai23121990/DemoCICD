import { ActionType } from "./ActionType";
import { initValues, IState } from "./InitState";
import React, { Dispatch } from "react";
import * as SearchService from "../../../services";
// import ENV, { Logger, SearchService } from 'services';
// import {  Category } from "./Model";

interface ReceivedItemAction {
    type: string;
    items: any;
}



type KnownAction = ReceivedItemAction;



export const ActionCreators = {
    QuickSearch: async (
        dispatch: React.Dispatch<KnownAction>,
        ModelSearch?: any
    ) => {
        
        let response = await SearchService.SearchService.QuickSearch(ModelSearch);
        if (response != null) {

            dispatch({
                type: ActionType.QuickSearch,
                items: response.data
            });
        }

    },
    BasicSearch: async (
        dispatch: React.Dispatch<KnownAction>,
        ModelSearch?: any
    ) => {

        let response = await SearchService.SearchService.BasicSearch(ModelSearch);
        if (response != null) {
            console.log("response.data",response.data);
            dispatch({
                type: ActionType.BasicSearch,
                items: response.data
            });
        }

    }
}

export const reducer = (state:any, doctypeAction: KnownAction) => {
    let action;
    
    switch (doctypeAction.type) {

        case ActionType.QuickSearch:
            action = doctypeAction as ReceivedItemAction
            return {
                ...state,
                item: action.items
            };
        case ActionType.BasicSearch:
            action = doctypeAction as ReceivedItemAction
            
            return {
                ...state,
                item: action.items
            };
    }
}



