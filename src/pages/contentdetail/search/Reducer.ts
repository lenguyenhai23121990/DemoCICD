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

    },
    BasicSearch_Refind_BibType: async (
        dispatch: React.Dispatch<KnownAction>,
        ModelSearch?: any
    ) => {

        let response = await OBibTypesService.OBibTypesService.O_BIBTYPES_BasicSearch(ModelSearch);
        if (response != null) {
           
            dispatch({
                type: ActionType.BibTypesQuickSearch,
                items: response.data
            });
        }

    },
    QuickSearch_Refind_BibType: async (
        dispatch: React.Dispatch<KnownAction>,
        ModelSearch?: any
    ) => {

        let response = await OBibTypesService.OBibTypesService.O_BIBTYPES_QuickSearch(ModelSearch);
        if (response != null) {
            console.log("response.data3333",response.data);
            dispatch({
                type: ActionType.BibTypesBasicSearch,
                items: response.data
            });
        }

    },
    BasicSearch_Refind_Author: async (
        dispatch: React.Dispatch<KnownAction>,
        ModelSearch?: any
    ) => {

        let response = await OBibTypesService.OAuthorsService.O_AUTHORS_BasicSearch(ModelSearch);
        if (response != null) {
           
            dispatch({
                type: ActionType.AuthorsQuickSearch,
                items: response.data
            });
        }

    },
    QuickSearch_Refind_Author: async (
        dispatch: React.Dispatch<KnownAction>,
        ModelSearch?: any
    ) => {

        let response = await OBibTypesService.OAuthorsService.O_AUTHORS_QuickSearch(ModelSearch);
        if (response != null) {
            console.log("responsedataAuthorQuickSearch",response.data);
            dispatch({
                type: ActionType.AuthorsBasicSearch,
                items: response.data
            });
        }

    },
    BasicSearch_Refind_Keyword: async (
        dispatch: React.Dispatch<KnownAction>,
        ModelSearch?: any
    ) => {

        let response = await SearchService.OKeywordsService.O_KEYWORDS_BasicSearch(ModelSearch);
        if (response != null) {
            console.log("responsedataAuthorBasicSearch",response.data);
            dispatch({
                type: ActionType.KeywordsQuickSearch,
                items: response.data
            });
        }

    },
    QuickSearch_Refind_Keyword: async (
        dispatch: React.Dispatch<KnownAction>,
        ModelSearch?: any
    ) => {

        let response = await SearchService.OKeywordsService.O_KEYWORDS_QuickSearch(ModelSearch);
        if (response != null) {
            console.log("response.data3333",response.data);
            dispatch({
                type: ActionType.KeywordsBasicSearch,
                items: response.data
            });
        }

    },
    BasicSearch_Refind_PubYear: async (
        dispatch: React.Dispatch<KnownAction>,
        ModelSearch?: any
    ) => {

        let response = await SearchService.OPubyearService.O_PUBYEAR_BasicSearch(ModelSearch);
        if (response != null) {
           
            dispatch({
                type: ActionType.PubyearQuickSearch,
                items: response.data
            });
        }

    },
    QuickSearch_Refind_PubYear: async (
        dispatch: React.Dispatch<KnownAction>,
        ModelSearch?: any
    ) => {

        let response = await SearchService.OPubyearService.O_PUBYEAR_QuickSearch(ModelSearch);
        if (response != null) {
            console.log("response.data3333",response.data);
            dispatch({
                type: ActionType.PubyearBasicSearch,
                items: response.data
            });
        }

    },
    BasicSearch_Refind_Subject: async (
        dispatch: React.Dispatch<KnownAction>,
        ModelSearch?: any
    ) => {

        let response = await SearchService.OSubjectService.O_SUBJECT_BasicSearch(ModelSearch);
        if (response != null) {
           
            dispatch({
                type: ActionType.SubjectQuickSearch,
                items: response.data
            });
        }

    },
    QuickSearch_Refind_Subject: async (
        dispatch: React.Dispatch<KnownAction>,
        ModelSearch?: any
    ) => {

        let response = await SearchService.OSubjectService.O_SUBJECT_QuickSearch(ModelSearch);
        if (response != null) {
            console.log("response.data3333",response.data);
            dispatch({
                type: ActionType.SubjectBasicSearch,
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
        case ActionType.BibTypesBasicSearch:
                action = doctypeAction as ReceivedItemAction
                
            return {
                ...state,
                items_BibType_Search: action.items
            }; 
        case ActionType.BibTypesQuickSearch:
                    action = doctypeAction as ReceivedItemAction
                    console.log("response.data11111",action.items);
            return {
                ...state,
                items_BibType_Search: action.items
            }; 
        case ActionType.AuthorsBasicSearch:
                action = doctypeAction as ReceivedItemAction
                
            return {
                ...state,
                items_Authors_Search: action.items
            }; 
        case ActionType.AuthorsQuickSearch:
                    action = doctypeAction as ReceivedItemAction
                    console.log("response.data11111",action.items);
            return {
                ...state,
                items_Authors_Search: action.items
            };    
            
        case ActionType.KeywordsBasicSearch:
                action = doctypeAction as ReceivedItemAction
                
            return {
                ...state,
                items_Keywords_Search: action.items
            }; 
        case ActionType.KeywordsQuickSearch:
                    action = doctypeAction as ReceivedItemAction
                    console.log("response.data11111",action.items);
            return {
                ...state,
                items_Keywords_Search: action.items
            }; 
        case ActionType.PubyearBasicSearch:
                action = doctypeAction as ReceivedItemAction
                
            return {
                ...state,
                items_Pubyear_Search: action.items
            }; 
        case ActionType.PubyearQuickSearch:
                    action = doctypeAction as ReceivedItemAction
                    console.log("response.data11111",action.items);
            return {
                ...state,
                items_Pubyear_Search: action.items
            };
        case ActionType.SubjectBasicSearch:
                action = doctypeAction as ReceivedItemAction
                
            return {
                ...state,
                items_Subject_Search: action.items
            }; 
        case ActionType.SubjectQuickSearch:
                    action = doctypeAction as ReceivedItemAction
                    console.log("response.data11111",action.items);
            return {
                ...state,
                items_Subject_Search: action.items
            }; 
    }
}



