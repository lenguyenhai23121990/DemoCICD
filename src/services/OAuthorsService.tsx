import { HttpClient } from "utils";
import { IEditReaderModel, INewReaderModel } from "models/service2/Reader";

const OAuthorsService = {
   
    O_AUTHORS_QuickSearch: async (data:any) => {
      
        return await HttpClient.post(`O_AUTHORS/Quick_search_O_AUTHORS`,data)
            .then(res => {return res})
    },
    O_AUTHORS_BasicSearch: async (data:any) => {
       //
        return await HttpClient.post(`O_AUTHORS/Basic_Search_O_AUTHORS`,data)
            .then(res => {
                console.log("resresres",res);
                return res
            })
    }
}
export default OAuthorsService
