import { ActionType } from "./ActionType";
import { initValues, IState } from "./InitState";
import React, { Dispatch } from "react";
import * as CMSService from "../../services";

// import ENV, { Logger, SearchService } from 'services';
// import {  Category } from "./Model";

interface ReceivedItemAction {
    type: string;
    items: any;
}



type KnownAction = ReceivedItemAction;



export const ActionCreators = {
    ListCateNews: async (
        dispatch: React.Dispatch<KnownAction>,
        Type : string
    ) => {
        console.log("cate11111111111")
        let response = await CMSService.CMSService.ListCateNews(Type);
        if (response != null) {
            console.log("responsedataCMSCate", response);
            dispatch({
                type: ActionType.ListCateNews,
                items: response.data
            });
        }

    },

    
    ListVideoByCategoryID: async (
        dispatch: React.Dispatch<KnownAction>,
        model: any
    ) => {
        
        let response = await CMSService.CMSService.ListVideoByCategoryID(model);
        if (response != null) {
            console.log("responsedataCMSsssssssss234567", response);
            dispatch({
                type: ActionType.ListVideoByCategoryID,
                items: response.data
            });
        }

    },

    DetailVideoByID: async (
        dispatch: React.Dispatch<KnownAction>,
        ID: number
    ) => {
        
        let response = await CMSService.CMSService.DetailVideo(ID);
        if (response != null) {
            console.log("responsedataCMSsssssssss234567", response);
            dispatch({
                type: ActionType.DetailVideo,
                items: response.data
            });
        }

    }

    


}

export const reducer = (state: any, doctypeAction: KnownAction) => {
    let action;

    switch (doctypeAction.type) {

        case ActionType.ListCateNews:
            action = doctypeAction as ReceivedItemAction

            return {
                ...state,
                item: action.items
            };
        case ActionType.ListVideoByCategoryID:
            action = doctypeAction as ReceivedItemAction

            return {
                ...state,
                item_ListVideoByCategoryID: action.items
            };

        case ActionType.DetailVideo:
            action = doctypeAction as ReceivedItemAction

            return {
                ...state,
                item_DetailVideo: action.items
            };
            
    }
}



