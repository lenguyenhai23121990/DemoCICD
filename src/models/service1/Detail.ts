import { IListMasterModel } from "./Master";

export interface INewDetailModel{
    Name: string,
    ParentId: string,
}
export interface IEditDetailModel{
    Id: string,
    Name: string,
    ParentId: string,
}
export interface IViewDetailModel{
    Id: string,
    Name: string,
    ParentId: string,
    Parent?: IListMasterModel,
}
export interface IListDetailModel{
    Id: string,
    Name: string,
    ParentId: string,
}