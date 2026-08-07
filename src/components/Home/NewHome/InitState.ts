// import { SequenceConfig } from "store/dataModels/CFG";
// import { ResourceGrid,ResourceGridView } from "store/dataModels/DocTypeList";

export const initValues = {
    ID: 0,
    TITLE: "",
    AUTHOR: "",
   
};

export interface IState {
    dataType: string;
    item: any
}

export const initState: IState = {
    dataType: "Param",
    item: initValues
}
