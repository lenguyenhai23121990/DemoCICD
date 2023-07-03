import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import ImageBanner1 from "../../assets/Image/2cf9d87d-bb41-47a9-8ed8-be87b9e6b700Binh minh duong day - Chay home.jpg"
import ImageBanner2 from "../../assets/Image/58e460f4-c9a7-49f9-b5d8-c5bf7a4be8ce927ddc2f-0dea-4551-bdcb-0acd6aeeae0dtoancanhnhamay.png"
import ImageBanner3 from "../../assets/Image/f7989008-c8f4-4065-8f74-3a018aea1fb2Nhiet dien Duyen Hai 1 - Chay home.jpg";

interface State {

}
type Props = {
    Keyword?:string;
    Cate? :string;
}
const BannerHeader = (props: Props) => {
const ClientSearchNews=()=>
{
    console.log("22222222");
}
    return (

        <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                    {/* <h3>First slide label</h3> */}
                    <p>Khai thác, sử dụng tài liệu không bị giới hạn về không gian, thời gian thông qua dữ liệu số EVN</p>
                    <div className="row col-md-12" id="searchBanner">
                <div className="container">
                    <div className="row">
                        <input type="text" id="txtKeyword"
                            // onKeyDown={javascript:if (event.keyCode == 13) {ClientSearchNews();}} 
                            className="form-control span12" placeholder="Từ khóa...." />
                        <select className="form-control" id="cboCateChild">
                            <option value="">CHỌN TIÊU CHÍ TÌM KIẾM</option>
                            <option value="title">Nhan đề</option>
                            <option value="author">Tác giả</option>
                            <option value="subject">Chủ đề</option>
                            <option value="keyword">Từ khóa</option>
                            <option value="yearpub">Năm xuất bản</option>
                        </select>
                        <a  href="#" onClick={()=>ClientSearchNews()} id="btnSearchHome" className="form-control"><i className="fa fa-search" /></a>
                    </div>
                </div>
            </div>
                </Carousel.Caption>
                <img className="bd-placeholder-img imageBannerCarousel" width="100%" height="100%" src={ImageBanner1} />

            </Carousel.Item>

            <Carousel.Item>
                <Carousel.Caption>
                    {/* <h3>Second slide label</h3> */}
                    <p>Sưu tầm và số hóa được một hệ thống ngân hàng tài liệu nội sinh và ngoại sinh về ngành Điện có giá trị tham khảo cao</p>
                    <div className="row col-md-12" id="searchBanner">
                <div className="container">
                    <div className="row">
                        <input type="text" id="txtKeyword"
                            // onKeyDown={javascript:if (event.keyCode == 13) {ClientSearchNews();}} 
                            className="form-control span12" placeholder="Từ khóa...." />
                        <select className="form-control" id="cboCateChild">
                            <option value="">CHỌN TIÊU CHÍ TÌM KIẾM</option>
                            <option value="title">Nhan đề</option>
                            <option value="author">Tác giả</option>
                            <option value="subject">Chủ đề</option>
                            <option value="keyword">Từ khóa</option>
                            <option value="yearpub">Năm xuất bản</option>
                        </select>
                        <a href="javascript:ClientSearchNews();" id="btnSearchHome" className="form-control"><i className="fa fa-search" /></a>
                    </div>
                </div>
            </div>
                </Carousel.Caption>
                <img className="bd-placeholder-img imageBannerCarousel" width="100%" height="100%" src={ImageBanner2} />
            </Carousel.Item>

            <Carousel.Item>
                <Carousel.Caption>
                    {/* <h3>Third slide label</h3> */}
                    <p>
                        Hỗ trợ cung cấp bạn đọc thông tin tra cứu trực tuyến tới một số cơ sở dữ liệu trong và ngoài nước.
                    </p>
                    <div className="row col-md-12" id="searchBanner">
                <div className="container">
                    <div className="row">
                        <input type="text" id="txtKeyword"
                            // onKeyDown={javascript:if (event.keyCode == 13) {ClientSearchNews();}} 
                            className="form-control span12" placeholder="Từ khóa...." />
                        <select className="form-control" id="cboCateChild">
                            <option value="">CHỌN TIÊU CHÍ TÌM KIẾM</option>
                            <option value="title">Nhan đề</option>
                            <option value="author">Tác giả</option>
                            <option value="subject">Chủ đề</option>
                            <option value="keyword">Từ khóa</option>
                            <option value="yearpub">Năm xuất bản</option>
                        </select>
                        <a href="javascript:ClientSearchNews();" id="btnSearchHome" className="form-control"><i className="fa fa-search" /></a>
                    </div>
                </div>
            </div>
                </Carousel.Caption>
                <img className="bd-placeholder-img imageBannerCarousel" width="100%" height="100%" src={ImageBanner3} />
            </Carousel.Item>

            <Carousel.Item>
                <Carousel.Caption>
                    {/* <h3>Second slide label</h3> */}
                    <p>Sưu tầm và số hóa được một hệ thống ngân hàng tài liệu nội sinh và ngoại sinh về ngành Điện có giá trị tham khảo cao</p>

                    <div className="row col-md-12" id="searchBanner">
                <div className="container">
                    <div className="row">
                        <input type="text" id="txtKeyword"
                            // onKeyDown={javascript:if (event.keyCode == 13) {ClientSearchNews();}} 
                            className="form-control span12" placeholder="Từ khóa...." />
                        <select className="form-control" id="cboCateChild">
                            <option value="">CHỌN TIÊU CHÍ TÌM KIẾM</option>
                            <option value="title">Nhan đề</option>
                            <option value="author">Tác giả</option>
                            <option value="subject">Chủ đề</option>
                            <option value="keyword">Từ khóa</option>
                            <option value="yearpub">Năm xuất bản</option>
                        </select>
                        <a href="javascript:ClientSearchNews();" id="btnSearchHome" className="form-control"><i className="fa fa-search" /></a>
                    </div>
                </div>
            </div>
                </Carousel.Caption>
                <img className="bd-placeholder-img imageBannerCarousel" width="100%" height="100%" src={ImageBanner2} />
            </Carousel.Item>
            
        </Carousel>



        //     <section>
        //     <div className="col-md-12 col-12 ">
        //         <div id="myCarouselTopbanner" className="carousel slide" data-ride="carousel">
        //             <ol className="carousel-indicators">
        //                 <li data-target="#myCarouselTopbanner" data-slide-to={0} style={{ margin: '10px' }} className="" />
        //                 <li data-target="#myCarouselTopbanner" data-slide-to={1} style={{ margin: '10px' }} className="" />
        //                 <li data-target="#myCarouselTopbanner" data-slide-to={2} style={{ margin: '10px' }} className="active" />
        //                 <li data-target="#myCarouselTopbanner" data-slide-to={3} style={{ margin: '10px' }} className="" />
        //             </ol>
        //             <div className="carousel-inner">
        //                 <div className="carousel-item">
        //                     <img className="bd-placeholder-img" width="100%" height="100%" src="http://10.161.10.104:8886/pages/cms/images/202011/2cf9d87d-bb41-47a9-8ed8-be87b9e6b700Binh minh duong day - Chay home.jpg" />
        //                     <div className="container">
        //                         <div className="carousel-caption text-center">
        //                             <p>Khai thác, sử dụng tài liệu không bị giới hạn về không gian, thời gian thông qua dữ liệu số EVN</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="carousel-item">
        //                     <img className="bd-placeholder-img" width="100%" height="100%" src="http://10.161.10.104:8886/pages/cms/images/202011/58e460f4-c9a7-49f9-b5d8-c5bf7a4be8ce927ddc2f-0dea-4551-bdcb-0acd6aeeae0dtoancanhnhamay.png" />
        //                     <div className="container">
        //                         <div className="carousel-caption text-center">
        //                             <p>Sưu tầm và số hóa được một hệ thống ngân hàng tài liệu nội sinh và ngoại sinh về ngành Điện có giá trị tham khảo cao</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="carousel-item active">
        //                     <img className="bd-placeholder-img" width="100%" height="100%" src="http://10.161.10.104:8886/pages/cms/images/202011/f7989008-c8f4-4065-8f74-3a018aea1fb2Nhiet dien Duyen Hai 1 - Chay home.jpg" />
        //                     <div className="container">
        //                         <div className="carousel-caption text-center">
        //                             <p>Hỗ trợ cung cấp bạn đọc thông tin tra cứu trực tuyến tới một số cơ sở dữ liệu trong và ngoài nước</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="carousel-item">
        //                     <img className="bd-placeholder-img" width="100%" height="100%" src="http://10.161.10.104:8886/pages/cms/images/202011/17e1e7eb-16b2-41b3-bfc5-f387baea45fdThuy dien Son La - Chay  home.jpg" />
        //                     <div className="container">
        //                         <div className="carousel-caption text-center">
        //                             <p>Nguồn lực thông tin: gần 200.000 biểu ghi của 10 CSDL; 11 bộ sưu tập và các cơ sở dữ liệu trực tuyến nước ngoài.</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="row col-md-12" id="searchBanner">
        //                 <div className="container">
        //                     <div className="row">
        //                         <input type="text" id="txtKeyword"
        //                             // onKeyDown={javascript:if (event.keyCode == 13) {ClientSearchNews();}} 
        //                             className="form-control span12" placeholder="Từ khóa...." />
        //                         <select className="form-control" id="cboCateChild">
        //                             <option value="">CHỌN TIÊU CHÍ TÌM KIẾM</option>
        //                             <option value="title">Nhan đề</option>
        //                             <option value="author">Tác giả</option>
        //                             <option value="subject">Chủ đề</option>
        //                             <option value="keyword">Từ khóa</option>
        //                             <option value="yearpub">Năm xuất bản</option>
        //                         </select>
        //                         <a href="javascript:ClientSearchNews();" id="btnSearchHome" className="form-control"><i className="fa fa-search" /></a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}
export default BannerHeader
