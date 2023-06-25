import UMSService from "./UserService"
import SV1Service from "./SV1Service"
import SV2Service from "./SV2Service"
import ReaderService from "./ReaderService"

const ENV = window._env_
export default ENV
export {
    UMSService,
    SV1Service,
    SV2Service,
    ReaderService,
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