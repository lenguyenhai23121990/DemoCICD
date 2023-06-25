import React from "react"


interface State {

}
type Props = State
const LinkFooterHome = (props: Props) => {

    return (
        
        
        <section>
        <div id="divFooterLink" className="row col-md-12 col-12 ">
            <div className="accordion row col-md-12 col-12" id="accordionFooterLink">
                <div className="col-md-12 col-12 left header-footer w-100">
                    <div className="container">
                        <span className="left spanButtonHomeFooter"> Trang chủ</span>
                        <span className="right"><a data-toggle="collapse" data-target="#collapseOne">--- Thu gọn nội dung</a></span>
                    </div>
                </div>
                <div id="collapseOne" className="collapse show container">
                    <div className="col-md-3 left">
                        <ul >
                            <li className="liTitleGroup"><a className="black" href="../cms/homecollection-bo-suu-tap-id-.html"><b>Bộ sưu tập</b></a></li>
                            <li ><a className="black" href="http://10.161.10.104:8886/pages/cms/collection-hoi-thao--ky-yeu--tai-lieu-id-106.html">Hội thảo, kỷ yếu, tài liệu</a></li>
                            <li ><a className="black" href="http://10.161.10.104:8886/pages/cms/collection-tap-chi-trong-nuoc-id-7.html">Tạp chí trong nước</a></li>
                            <li ><a className="black" href="http://10.161.10.104:8886/pages/cms/collection-tap-chi-nuoc-ngoai-id-8.html">Tạp chí nước ngoài</a></li>
                            <li ><a className="black" href="http://10.161.10.104:8886/pages/cms/collection-sang-kien-id-107.html">Sáng kiến</a></li>
                            <li ><a className="black" href="http://10.161.10.104:8886/pages/cms/collection-du-an-dien-id-105.html">Dự án Điện</a></li>
                            <li ><a className="black" href="http://10.161.10.104:8886/pages/cms/collection-de-tai-nckh-id-3872.html">Đề tài NCKH</a></li>
                            <li ><a className="black" href="http://10.161.10.104:8886/pages/cms/collection-sach-id-104.html">Sách</a></li>
                            <li ><a className="black" href="http://10.161.10.104:8886/pages/cms/collection-anh-id-3874.html">Ảnh</a></li>
                            <li ><a className="black" href="http://10.161.10.104:8886/pages/cms/collection-tieu-chuan-ky-thuat-dien-id-108.html">Tiêu chuẩn kỹ thuật Điện</a></li>
                            <li ><a className="black" href="http://10.161.10.104:8886/pages/cms/collection-video-id-5287.html">Video</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 left">
                        <ul >
                            <li ><a className="black" href="/pages/cms/collection-dao-tao-id-7763.html">Đào tạo</a></li>
                            <li ><a className="black" href="/pages/cms/collection-khac-id-110.html">Khác</a></li>
                            <li ><a className="black" href="javascript:void(0);"><br /></a></li>
                            <li className="liTitleGroup"><a className="black" href="/pages/cms/datastatistics-id-VIETNAM.html"><b>Số liệu thống kê </b></a></li>
                            <li ><a className="black" href="/pages/cms/datastatistics-id-VIETNAM.html">Việt Nam</a></li>
                            <li ><a className="black" href="/pages/cms/datastatistics-id-BCSDLTQG.html">Bộ chỉ số điện lực theo quốc gia</a></li>
                            <li ><a className="black" href="/pages/cms/datastatistics-id-BCSDLTDN.html">Bộ chỉ số điện lực theo doanh nghiệp</a></li>
                            <li ><a className="black" href="/pages/cms/datastatistics-id-CHAUA.html">Châu Á</a></li>
                            <li ><a className="black" href="/pages/cms/datastatistics-id-THEGIOI.html">Thế giới</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 left">
                        <ul >
                            <li className="liTitleGroup"><a className="black" href="javascript:void(0);"><b>Điểm báo</b></a></li>
                            <li ><a className="black" href="/pages/cms/newspaper-bao-dien-tu-id-10.html">Báo điện tử</a></li>
                            <li ><a className="black" href="/pages/cms/newspaper-bao-giay-id-11.html">Báo giấy</a></li>
                            <li ><a className="black" href="/pages/cms/newspaper-thong-cao-bao-chi-id-1305.html">Thông cáo báo chí</a></li>
                            <li ><a className="black" href="javascript:void(0);"><br /></a></li>
                            <li className="liTitleGroup"><a className="black" href="javascript:void(0);"><b>Nghiên cứu khoa học</b></a></li>
                            <li ><a className="black" href="/pages/cms/science-dang-ky-nghien-cuu-khoa-hoc-id.html">Đăng ký NCKH</a></li>
                            <li ><a className="black" href="/pages/cms/science-de-tai-da-nghiem-thu-id.html">Đề tài đã nghiệm thu</a></li>
                            <li ><a className="black" href="/pages/cms/science-sang-kien-da-cong-bo-id.html">Sáng kiến đã công bố</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 left ImagerFooterRight">
                        <a href="https://www.evn.com.vn" target="_blank"> <img className="w-200" src="http://10.161.10.104:8886/pages/cms/images/Tapdoandienluc.png" /> </a>
                        <a href="https://nhatruyenthong.evn.com.vn" target="_blank"><img className="w-200-1" src="http://10.161.10.104:8886/pages/cms/images/nhatruyenthong.png" /> </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default LinkFooterHome
