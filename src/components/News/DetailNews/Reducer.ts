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
    DetailNews: async (
        dispatch: React.Dispatch<KnownAction>,
        ID: number
    ) => {

        let response = await CMSService.CMSService.DetailNews(ID );
        if (response != null) {
            console.log("responsedataCMS",response);
            dispatch({
                type: ActionType.DetailNews,
                items: response.data
            });
        }

    },

    NewsOtherByID: async (
        dispatch: React.Dispatch<KnownAction>,
        ID: number
    ) => {

        let response = await CMSService.CMSService.NewsOtherByID(ID );
        if (response != null) {
            console.log("responsedataCMSsssssssss",response);
            dispatch({
                type: ActionType.NewsOtherByID,
                items: response.data
            });
        }

    },

    
    

}

export const reducer = (state:any, doctypeAction: KnownAction) => {
    let action;
    
    switch (doctypeAction.type) {

        case ActionType.DetailNews:
            action = doctypeAction as ReceivedItemAction
            
            return {
                ...state,
                item: action.items
            };
        case ActionType.NewsOtherByID:
                action = doctypeAction as ReceivedItemAction
                
                return {
                    ...state,
                    item_NewsOtherByID: action.items
                };
            
    }
}



