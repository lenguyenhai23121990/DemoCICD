import { HttpClient } from "utils";

const OKeywordsService = {
   
    O_KEYWORDS_QuickSearch: async (data:any) => {
      
        return await HttpClient.post(`O_KEYWORDS/Quick_search_O_KEYWORDS`,data)
            .then(res => {return res})
    },
    O_KEYWORDS_BasicSearch: async (data:any) => {
       //
        return await HttpClient.post(`O_KEYWORDS/Basic_Search_O_KEYWORDS`,data)
            .then(res => {
                console.log("resresres",res);
                return res
            })
    }
}
export default OKeywordsService
