import { IViewDetailModel } from "./Detail";

export interface INewMasterModel{
    Name: string,
}
export interface IEditMasterModel{
    Id: string,
    Name: string,
}
export interface IViewMasterModel{
    Id: string,
    Name: string,
    Details?: IViewDetailModel[],
}
export interface IListMasterModel{
    Id: string,
    Name: string,
}