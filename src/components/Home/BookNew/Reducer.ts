import { ActionType } from "./ActionType";
import { initValues, IState } from "./InitState";
import React, { Dispatch } from "react";
import * as SearchService from "../../../services";
import * as OBibTypesService from "../../../services";

// import ENV, { Logger, SearchService } from 'services';
// import {  Category } from "./Model";

interface ReceivedItemAction {
    type: string;
    items: any;
}



type KnownAction = ReceivedItemAction;



export const ActionCreators = {
    GetBookNew: async (
        dispatch: React.Dispatch<KnownAction>,
        CountBookGet: number
    ) => {
        
        let response = await SearchService.SearchService.GetBookNew(CountBookGet);
        if (response != null) {
            console.log("response.data99999999999",response.data.Data);
            dispatch({
                type: ActionType.DetailSearch,
                items: response.data
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



