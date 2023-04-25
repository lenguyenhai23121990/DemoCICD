import { HttpClient } from "utils";

const UMSService = {
    signIn: async(signInRequestModel: any) => {
        return await HttpClient.post(`ums/Auth/SignIn`, signInRequestModel)
            .then(res => {return res})
    },
    signOut: async() => {
        return await HttpClient.post(`ums/Auth/SignOut`,{})
            .then(res => {return res})
    },
    getUsers: async (page: number, pageSize: number, name?: string) => {
        return await HttpClient.get(`ums/User?page=${page}&pageSize=${pageSize}&name=${name??""}`)
            .then(res => {return res})
    },
    getUser: async (userId: string) => {
        return await HttpClient.get(`ums/User?userId=${userId}`)
            .then(res => {return res})
    },
    getUserDetail: async (userId: string) => {
        return await HttpClient.get(`ums/User/detail/${userId}`)
            .then(res => {return res})
    },
    getByName: async (userName: string) => {
        return await HttpClient.get(`ums/User?userName=${userName}`)
            .then(res => {return res})
    },
    getDetailByName: async (userName: string) => {
        return await HttpClient.get(`ums/User?userName=${userName}`)
            .then(res => {return res})
    },
    deleteUser: async (userId: string) => {
        return await HttpClient.delete(`ums/User?userId=${userId}`)
            .then(res => {return res})
    },
    createUser: async (user: any) => {
        return await HttpClient.post(`ums/User`, user)
            .then(res => {return res})
    },
}

export default UMSService