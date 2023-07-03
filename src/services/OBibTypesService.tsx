import { HttpClient } from "utils";
import { IEditReaderModel, INewReaderModel } from "models/service2/Reader";

const OBibTypesService = {
   
    O_BIBTYPES_QuickSearch: async (data:any) => {
      
        return await HttpClient.post(`O_BIBTYPES/Quick_search_O_BIBTYPES`,data)
            .then(res => {return res})
    },
    O_BIBTYPES_BasicSearch: async (data:any) => {
       //
        return await HttpClient.post(`O_BIBTYPES/Basic_Search_O_BIBTYPES`,data)
            .then(res => {
                console.log("resresres",res);
                return res
            })
    }
}
export default OBibTypesService
