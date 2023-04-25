import { HttpClient } from "utils";
import { INewMasterModel, IEditMasterModel } from "models";

const SV1Service = {
    createMaster: async (model: INewMasterModel) => {
        return await HttpClient.post(`service1/Master/createMaster`, model)
            .then(res => {return res})
    },
    updateMaster: async (model: IEditMasterModel) => {
        return await HttpClient.put(`service1/Master/updateMaster`, model)
            .then(res => {return res})
    },
    getMasters: async (page: number, pageSize: number) => {
        return await HttpClient.get(`service1/Master/getMasters?page=${page}&pageSize=${pageSize}`)
            .then(res => {return res})
    },
    getMaster: async (Id: string) => {
        return await HttpClient.get(`service1/Master/getMaster?Id=${Id}`)
            .then(res => {return res})
    },
    deleteMaster: async (Id: string) => {
        return await HttpClient.delete(`service1/Master/deleteMaster?Id=${Id}`)
            .then(res => {return res})
    },
}
export default SV1Service
