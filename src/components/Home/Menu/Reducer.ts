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
    ListMenu: async (
        dispatch: React.Dispatch<KnownAction>
    ) => {
        console.log("cate11111111111")
        let response = await CMSService.CMSService.ListMenu();
        if (response != null) {
            console.log("responsedataCMSCate", response);
            dispatch({
                type: ActionType.ListMenu,
                items: response.data
            });
        }

    },

   




}

export const reducer = (state: any, doctypeAction: KnownAction) => {
    let action;

    switch (doctypeAction.type) {

        case ActionType.ListMenu:
            action = doctypeAction as ReceivedItemAction

            return {
                ...state,
                item: action.items
            };
       

    }
}



