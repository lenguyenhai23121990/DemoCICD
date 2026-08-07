import UMSService from "./UserService"
import SV1Service from "./SV1Service"
import SV2Service from "./SV2Service"
import ReaderService from "./ReaderService"
import SearchService from "./SearchService"
import OBibTypesService from "./OBibTypesService"
import OAuthorsService from "./OAuthorsService"
import OKeywordsService from "./OKeywordsService"
import OPubyearService from "./OPubyearService"
import OSubjectService from "./OSubjectService"
import CMSService from "./CMSService"


const ENV = window._env_
export default ENV
export {
    UMSService,
    SV1Service,
    SV2Service,
    ReaderService,
    SearchService,
    OBibTypesService,
    OAuthorsService,
    OKeywordsService,
    OPubyearService,
    OSubjectService,
    CMSService
}

export const Logger = {
    debug: (msg: string) => {
        if(ENV.PROFILE === "development"){
            console.log(msg)
        }
    },
    error: (msg: string) => {
        console.error(msg)
    },
    info: (msg: string) => {
        console.log(msg)
    },
}