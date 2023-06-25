import React from "react"


interface State {

}
type Props = State
const CollectionHome = (props: Props) => {

    return (
        <section>
                <div className="containernews">
                    <div className="col-sm-12" id="maincollLoading1">          <section className="homeTopBlock">
                        <div className="rowCollectionHome">
                            <div id="divCollectionHome" className="col-md-6 col-12 ">
                                <h3 className="header1"><a href="../cms/homecollection-bo-suu-tap-id-1.html">Bộ sưu tập</a><hr id="hrcolor" /> </h3>
                                <div className="ContentTitleCollectionHome">Các tài liệu ngành Điện đặc thù có tính chất tham khảo cao thuộc nhiều loại hình tài liệu khác nhau được tổ chức trong 11 bộ sưu tập:</div>
                                <div className="row">
                                    <div className="ContentCollectionHome col-md-6 col-12">
                                        <div id="divCollectionLine" className="fa fa-dot-circle-o"><a href="/pages/cms/collection-hoi-thao--ky-yeu--tai-lieu-id-106.html" target="_blank"> Hội thảo, kỷ yếu, tài liệu</a></div>
                                        <div id="divCollectionLine" className="fa fa-dot-circle-o"><a href="/pages/cms/collection-tap-chi-trong-nuoc-id-7.html" target="_blank"> Tạp chí trong nước</a></div>
                                        <div id="divCollectionLine" className="fa fa-dot-circle-o"><a href="/pages/cms/collection-tap-chi-nuoc-ngoai-id-8.html" target="_blank"> Tạp chí nước ngoài</a></div>
                                        <div id="divCollectionLine" className="fa fa-dot-circle-o"><a href="/pages/cms/collection-sang-kien-id-107.html" target="_blank"> Sáng kiến</a></div>
                                        <div id="divCollectionLine" className="fa fa-dot-circle-o"><a href="/pages/cms/collection-du-an-dien-id-105.html" target="_blank"> Dự án Điện</a></div>
                                        <div id="divCollectionLine" className="fa fa-dot-circle-o"><a href="/pages/cms/collection-de-tai-nckh-id-3872.html" target="_blank"> Đề tài NCKH</a></div>
                                    </div>
                                    <div className="ContentCollectionHome col-md-6 col-12">
                                        <div id="divCollectionLine" className="fa fa-dot-circle-o"><a href="/pages/cms/collection-sach-id-104.html" target="_blank"> Sách</a></div>
                                        <div id="divCollectionLine" className="fa fa-dot-circle-o"><a href="/pages/cms/collection-anh-id-3874.html" target="_blank"> Ảnh</a></div>
                                        <div id="divCollectionLine" className="fa fa-dot-circle-o"><a href="/pages/cms/collection-tieu-chuan-ky-thuat-dien-id-108.html" target="_blank"> Tiêu chuẩn kỹ thuật Điện</a></div>
                                        <div id="divCollectionLine" className="fa fa-dot-circle-o"><a href="/pages/cms/collection-video-id-5287.html" target="_blank"> Video</a></div>
                                        <div id="divCollectionLine" className="fa fa-dot-circle-o"><a href="/pages/cms/collection-dao-tao-id-7763.html" target="_blank"> Đào tạo</a></div>
                                        <div id="divCollectionLine" className="fa fa-dot-circle-o"><a href="/pages/cms/collection-khac-id-110.html" target="_blank"> Khác</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <h3 className="header1"><a href="http://tudienkythuatdien.evn.com.vn">TỪ ĐIỂN KỸ THUẬT ĐIỆN</a><hr id="hrcolor" /> </h3>
                                <div id="myCarouselCollection">
                                    <div className="carousel-inner">
                                        <a href="http://tudienkythuatdien.evn.com.vn"><img src="http://10.161.10.104:8886/pages/cms/img/ImageCollection.jpg" alt="" /></a>
                                    </div>
                                </div>
                            </div></div></section>
                    </div>
                </div>
            </section>
    )
}
export default CollectionHome
