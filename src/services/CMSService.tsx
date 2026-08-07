import { HttpClient } from "utils";
import { IEditReaderModel, INewReaderModel } from "models/service2/Reader";
import ENV from "services";

const CMSService = {
   
    GetLOGO_BANNER_HOME: async () => {
      
        return await HttpClient.post(ENV.PREFIX_CMS+'/'+`CMS_LOGO_BANNER/GetLOGO_BANNER_HOME`,"")
            .then(res => {return res})
    },
    TopNewsHome: async (CountTop:number) => {
      
        return await HttpClient.post(ENV.PREFIX_CMS+'/'+`CMS_NEWS/TopNewsHome?CountTop=`+CountTop,"")
            .then(res => {return res})
    },
    DetailNews: async (ID:number) => {
        console.log("IDIDIDIDID",ID);
        return await HttpClient.get(ENV.PREFIX_CMS+'/'+`CMS_NEWS/DetailNewsByID?Id=`+ID)
            .then(res => {
                console.log("ressssss",res);
                return res
            })
    },
    NewsOtherByID: async (ID:number) => {
      
        return await HttpClient.post(ENV.PREFIX_CMS+'/'+`CMS_NEWS/NewsOtherByID?ID=`+ID,"")
            .then(res => {return res})
    },

    ListNewsByCategoryID: async (model:any) => {
        console.log("re999999999999999933333333333",model);
        return await HttpClient.post(ENV.PREFIX_CMS+'/'+`CMS_NEWS/ListNewsByCategoryID`,model)
            .then(res => {return res})
    },
    
    ListVideoByCategoryID: async (model:any) => {
        console.log("re999999999999999933333333333",model);
        return await HttpClient.post(ENV.PREFIX_CMS+'/'+`CMS_VIDEOS/ListVideoByCategoryID`,model)
            .then(res => {return res})
    },
    DetailVideo: async (ID:number) => {
        return await HttpClient.post(ENV.PREFIX_CMS+'/'+`CMS_VIDEOS/DetailVideo?ID=`+ID,"")
            .then(res => {return res})
    },
    
    ListCateNews: async (Type: string ) => {
      console.log("Cateeeeee-----",Type)
        return await HttpClient.post(ENV.PREFIX_CMS+'/'+`CMS_CATEGORY/ListCateNews?Type=`+Type,"")
            .then(res => {return res})
    },
    ListMenu: async () => {
        console.log("CateeeeeeMenu")
          return await HttpClient.post(ENV.PREFIX_CMS+'/'+`CMS_MENU/ListMenuHome`,"")
              .then(res => {return res})
      },
    DownloadFile: async (PathFile: string) => {
        console.log("PathFilePathFilePathFilePathFile",PathFile);
        return await HttpClient.post(ENV.PREFIX_CMS+'/'+`CMS_DigitalFiles/DownloadFile?PathFile=`+ PathFile,"")
            .then(res => {
                console.log("ressssss",res);
                return res
            })
    },
  
}
export default CMSService
