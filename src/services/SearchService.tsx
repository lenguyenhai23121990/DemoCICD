import { HttpClient } from "utils";
import { IEditReaderModel, INewReaderModel } from "models/service2/Reader";
import ENV from "services";

const SearchService = {
    QuickSearch: async (data:any) => {
        console.log("33333333333333",data);
        return await HttpClient.post(ENV.PREFIX_OPAC+'/'+`O_ITEM/Quick_search`,data)
            .then(res => {return res})
    },
    BasicSearch: async (data:any) => {
        
        return await HttpClient.post(ENV.PREFIX_OPAC+'/'+`O_ITEM/Basic_Search`,data)
            .then(res => {
                console.log("resresres",res);
                return res
            })
    },

    ReportQuickSearch: async (data:any) => {
        console.log("33333333333333",data);
        return await HttpClient.post(ENV.PREFIX_OPAC+'/'+`O_ITEM/Report_Quick_search`,data)
            .then(res => {return res})
    },
    ReportBasicSearch: async (data:any) => {
        
        return await HttpClient.post(ENV.PREFIX_OPAC+'/'+`O_ITEM/Report_Basic_search`,data)
            .then(res => {
                console.log("111112223334445566677888",res);
                return res
            })
    },
    
    SearchByID: async (SearchID:number) => {
        
        return await HttpClient.get(ENV.PREFIX_OPAC+'/'+`O_ITEM/Get_O_Item_By_ID?ID=`+SearchID,)
            .then(res => {
                console.log("resresres11111",res);
                return res
            })
    },
    GetBookNew: async (CountBookGet:number) => {
        
        return await HttpClient.post(ENV.PREFIX_OPAC+'/'+`O_ITEM/BookNew?CountBookGet=`+CountBookGet.toString(),"")
            .then(res => {
                console.log("resresres11111",res);
                return res
            })
    },
    
    // RefindQuickSearch: async (data:any) => {
    //     console.log("33333333333333",data);
    //     return await HttpClient.post(`O_ITEM/RefindSearch_Quick_Search`,data)
    //         .then(res => {return res})
    // },
    // RefindBasicSearch: async (data:any) => {
        
    //     return await HttpClient.post(`O_ITEM/RefindSearch_Basic_Search`,data)
    //         .then(res => {
    //             console.log("resresres",res);
    //             return res
    //         })
    // }
    
}
export default SearchService
