import React from "react"

import logoheader from "../../assets/Image/logo_header.png";
import mdiphone from "../../assets/Image/mdi_phone.png";
import mdimapmarker from "../../assets/Image/mdi_map-marker.png";
import mdiemailvariant from "../../assets/Image/mdi_email-variant.png";
import Rectangle31 from "../../assets/Image/Rectangle 31.png";
import mdiaccountcircle from "../../assets/Image/mdi_account-circle.png";

interface State {

}
type Props = State
const TopHeader = (props: Props) => {

    return (
        <section>
            <div className="row topBanner">
                <div className="col-md-3 col-12 ">

                    <img id="imgTopHeader" src={logoheader}></img>
                </div>  <div className="col-md-8 col-12 divIconLeft">
                    <a href="tel:024.669.46138"> <img id="" src={mdiphone} />
                        {/* <img src={mdi_phone} /> */}
                    </a>
                    <a href="#">

                        <img src={mdimapmarker} /></a>
                    <a href="mailto:cosodulieu@evn.com.vn">
                        <img src={mdiemailvariant} />
                    </a>
                    <a>
                        <img src={Rectangle31} />
                    </a>
                    <div style={{ display: 'inline' }} id="divbtnLogin">
                        <a href="#collapseExample" data-toggle="collapse" className="collapsed" aria-expanded="false">
                            <img src={mdiaccountcircle} /></a>
                        <ul className="collapse" style={{ listStyleType: "none" }} id="collapseExample">
                            <li><a href="#" data-toggle="modal" data-target="#login"> Đăng nhập</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#register"> Đăng ký</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TopHeader
