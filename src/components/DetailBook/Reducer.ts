import { ActionType } from "./ActionType";
import { initValues, IState } from "./InitState";
import React, { Dispatch } from "react";
import * as SearchService from "../../services";
import * as OBibTypesService from "../../services";

// import ENV, { Logger, SearchService } from 'services';
// import {  Category } from "./Model";

interface ReceivedItemAction {
    type: string;
    items: any;
}



type KnownAction = ReceivedItemAction;



export const ActionCreators = {
    SearchByID: async (
        dispatch: React.Dispatch<KnownAction>,
        SearchByID: number
    ) => {

        let response = await SearchService.SearchService.SearchByID(SearchByID);
        if (response != null) {
            console.log("response.data",response.data.Data);
            dispatch({
                type: ActionType.DetailSearch,
                items: response.data.Data
            });
        }

    },
    

}

export const reducer = (state:any, doctypeAction: KnownAction) => {
    let action;
    
    switch (doctypeAction.type) {

        case ActionType.DetailSearch:
            action = doctypeAction as ReceivedItemAction
            
            return {
                ...state,
                item: action.items
            };
       
    }
}



