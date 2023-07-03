import { HttpClient } from "utils";
import { IEditReaderModel, INewReaderModel } from "models/service2/Reader";

const OPubyearService = {
   
    O_PUBYEAR_QuickSearch: async (data:any) => {
      
        return await HttpClient.post(`O_PUBYEARS/Quick_search_O_PUBYEARS`,data)
            .then(res => {return res})
    },
    O_PUBYEAR_BasicSearch: async (data:any) => {
       //
        return await HttpClient.post(`O_PUBYEARS/Basic_Search_O_PUBYEARS`,data)
            .then(res => {
                console.log("resresres",res);
                return res
            })
    }
}
export default OPubyearService
