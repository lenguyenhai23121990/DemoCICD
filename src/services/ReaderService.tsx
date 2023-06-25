import { HttpClient } from "utils";
import { INewMasterModel, IEditMasterModel } from "models";
import { IEditReaderModel, INewReaderModel } from "models/service2/Reader";

const ReaderService = {
    createReader: async (model: INewReaderModel) => {
        return await HttpClient.post(`Reader/createReader`, model)
            .then(res => {return res})
    },
    updateMaster: async (model: IEditReaderModel) => {
        return await HttpClient.put(`Reader/updateReader`, model)
            .then(res => {return res})
    },
    getReader: async (page: number, pageSize: number) => {
        
        return await HttpClient.get(`Reader/GetReaders?page=${page}&pageSize=${pageSize}`)
            .then(res => {return res})
    },
    
    getReaderByID: async (Id: string) => {
        return await HttpClient.get(`Reader/getReader?Id=${Id}`)
            .then(res => {return res})
    },
    deleteReader: async (Id: string) => {
        return await HttpClient.delete(`Reader/deleteReader?Id=${Id}`)
            .then(res => {return res})
    },
}
export default ReaderService
