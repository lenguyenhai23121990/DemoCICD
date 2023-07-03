import React from "react"
import mdihomeoutline from "../../assets/Image/mdi_home-outline.png";

interface State {

}
type Props = State
const MenuTop = (props: Props) => {

    return (
         <section>
                <div className="col-md-12 col-12 divpadingZero" >
                    <nav className="nav  navbar navbar-expand-md navbar navbar-light topMenu" role="navigation">
                        <div className="container-fluid">
                            <div>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item align-self-center "><a href="/Home"><img src={mdihomeoutline} /></a></li>
                                    <li className="align-self-center "><a href="/Search" target="_self">TRA CỨU DỮ LIỆU</a></li>
                                    <li className="align-self-center "><a href="/CollectionHome">BỘ SƯU TẬP</a></li>
                                    <li className="align-self-center "><a href="/CategoryNews" target="_self">ĐIỂM BÁO</a></li>
                                    {/* <li className="align-self-center "><a href="../cms/datastatistics-id-1.html" target="_self">SỐ LIỆU THỐNG KÊ</a></li>
                                    <li className="align-self-center "><a href="../cms/science-id-1.html">NGHIÊN CỨU KHOA HỌC</a></li>
                                    <li className="align-self-center "><a href="http://tudienkythuatdien.evn.com.vn/" target="_blank">TỪ ĐIỂN KỸ THUẬT ĐIỆN</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section> 
    )
}
export default MenuTop
