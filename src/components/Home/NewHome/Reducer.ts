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
    TopNewsHome: async (
        dispatch: React.Dispatch<KnownAction>,
        CountTop: number
    ) => {

        let response = await CMSService.CMSService.TopNewsHome(CountTop );
        if (response != null) {
            console.log("responsedataCMS",response.data);
            dispatch({
                type: ActionType.ListNewsHome,
                items: response.data
            });
        }

    },
    

}

export const reducer = (state:any, doctypeAction: KnownAction) => {
    let action;
    
    switch (doctypeAction.type) {

        case ActionType.ListNewsHome:
            action = doctypeAction as ReceivedItemAction
            
            return {
                ...state,
                item: action.items
            };
       
    }
}



