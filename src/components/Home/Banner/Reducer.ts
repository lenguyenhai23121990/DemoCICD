import { ActionType } from "./ActionType";
import { initValues, IState } from "./InitState";
import React, { Dispatch } from "react";
import * as CMSService from "../../../services";

// import ENV, { Logger, SearchService } from 'services';
// import {  Category } from "./Model";

interface ReceivedItemAction {
    type: string;
    items: any;
}



type KnownAction = ReceivedItemAction;



export const ActionCreators = {
    GetLOGO_BANNER_HOME: async (
        dispatch: React.Dispatch<KnownAction>,
    ) => {

        let response = await CMSService.CMSService.GetLOGO_BANNER_HOME();
        if (response != null) {
            console.log("responsedataCMS",response.data);
            dispatch({
                type: ActionType.ListLogoBanner,
                items: response.data
            });
        }

    },
    

}

export const reducer = (state:any, doctypeAction: KnownAction) => {
    let action;
    
    switch (doctypeAction.type) {

        case ActionType.ListLogoBanner:
            action = doctypeAction as ReceivedItemAction
            
            return {
                ...state,
                item: action.items
            };
       
    }
}



