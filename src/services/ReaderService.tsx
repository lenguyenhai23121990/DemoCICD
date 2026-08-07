import { HttpClient } from "utils";
import { INewMasterModel, IEditMasterModel } from "models";
import { IEditReaderModel, INewReaderModel } from "models/service2/Reader";
import ENV from "services";

const ReaderService = {
    createReader: async (model: INewReaderModel) => {
        return await HttpClient.post(ENV.PREFIX_OPAC+'/'+`Reader/createReader`, model)
            .then(res => {return res})
    },
    updateMaster: async (model: IEditReaderModel) => {
        return await HttpClient.put(ENV.PREFIX_OPAC+'/'+`Reader/updateReader`, model)
            .then(res => {return res})
    },
    getReader: async (page: number, pageSize: number) => {
        
        return await HttpClient.get(ENV.PREFIX_OPAC+'/'+`Reader/GetReaders?page=${page}&pageSize=${pageSize}`)
            .then(res => {return res})
    },
    
    getReaderByID: async (Id: string) => {
        return await HttpClient.get(ENV.PREFIX_OPAC+'/'+`Reader/getReader?Id=${Id}`)
            .then(res => {return res})
    },
    deleteReader: async (Id: string) => {
        return await HttpClient.delete(ENV.PREFIX_OPAC+'/'+`Reader/deleteReader?Id=${Id}`)
            .then(res => {return res})
    },
}
export default ReaderService
