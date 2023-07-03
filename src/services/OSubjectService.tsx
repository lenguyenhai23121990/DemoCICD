import { HttpClient } from "utils";
import { IEditReaderModel, INewReaderModel } from "models/service2/Reader";

const OSubjectService = {
   
    O_SUBJECT_QuickSearch: async (data:any) => {
      
        return await HttpClient.post(`O_SUBJECTS/Quick_search_O_SUBJECTS`,data)
            .then(res => {return res})
    },
    O_SUBJECT_BasicSearch: async (data:any) => {
       //
        return await HttpClient.post(`O_SUBJECTS/Basic_Search_O_SUBJECTS`,data)
            .then(res => {
                console.log("resresres",res);
                return res
            })
    }
}
export default OSubjectService
