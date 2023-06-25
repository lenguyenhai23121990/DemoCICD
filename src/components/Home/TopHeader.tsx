import React from "react"


interface State {

}
type Props = State
const TopHeader = (props: Props) => {

    return (
        <section>
            <div className="row topBanner">
                <div className="col-md-3 col-12 ">

                    <img id="imgTopHeader" src="http://10.161.10.104:8886/pages/cms/img/logo_header.png"></img>
                </div>  <div className="col-md-8 col-12 divIconLeft">
                    <a href="tel:024.669.46138"> <img id="" src="http://10.161.10.104:8886/pages/cms/img/mdi_phone.png" />
                        {/* <img src={mdi_phone} /> */}
                    </a>
                    <a href="#">

                        <img src="http://10.161.10.104:8886/pages/cms/img/mdi_map-marker.png" /></a>
                    <a href="mailto:cosodulieu@evn.com.vn">
                        <img src="http://10.161.10.104:8886/pages/cms/img/mdi_email-variant.png" />
                    </a>
                    <a>
                        <img src="http://10.161.10.104:8886/pages/cms/img/Rectangle 31.png" />
                    </a>
                    <div style={{ display: 'inline' }} id="divbtnLogin">
                        <a href="#collapseExample" data-toggle="collapse" className="collapsed" aria-expanded="false">
                            <img src="http://10.161.10.104:8886/pages/cms/img/mdi_account-circle.png" /></a>
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
