import React from "react"


interface State {

}
type Props = State
const NewsPaperHome = (props: Props) => {

    return (
        
        
        <section>
        <div className="containernews">
            <div className="col-sm-12" id="maincollLoading3"><section className="homeTopBlock ">
                <h3 className="header1"><a href="/pages/cms/newspaper-Diem-bao-id.html"> Điểm báo</a><hr id="hrcolor" /></h3>
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div id="divNewsNew">
                            <div className="divImageNews"> <a href="http://10.161.10.104:8886/pages/cms/newspaper-toan-canh-bao-chi-viet-ve-nganh-dien-sau-cac-thong-cao-bao-chi-cua-evn-id-1305.html"><img src="http://10.161.10.104:8886/pages/cms/img/DiemBao1.png" className="media-object" alt="" /></a></div>
                            <h4 className="media-heading divDescriptionNews" style={{ textAlign: 'center' }}><a href="http://10.161.10.104:8886/pages/cms/newspaper-thong-cao-bao-chi-id-1305.html">Thông cáo báo chí</a> </h4>
                            <div style={{ textAlign: 'center' }} className="divNewsHome">  <span style={{ verticalAlign: 'middle' }}>Toàn cảnh báo chí viết về ngành Điện sau các thông cáo báo chí của EVN</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 ">
                        <div id="divNewsNew">
                            <div className="divImageNews"> <a href="http://10.161.10.104:8886/pages/cms/newspaper-tren-121000-tin--bai-viet-ve-nganh-dien-duoc-phan-anh-da-chieu-qua-cac-kenh-truyen-thong-dien-tu-id-10.html"><img src="http://10.161.10.104:8886/pages/cms/img/DiemBao2.png" className="media-object" alt="" /></a></div>
                            <h4 className="media-heading divDescriptionNews" style={{ textAlign: 'center' }}><a href="http://10.161.10.104:8886/pages/cms/newspaper-bao-dien-tu-id-10.html">Báo điện tử</a> </h4>
                            <div style={{ textAlign: 'center' }} className="divNewsHome">  <span style={{ verticalAlign: 'middle' }}>Trên 121.000 tin, bài viết về ngành Điện được phản ảnh đa chiều qua các kênh truyền thông điện tử</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div id="divNewsNew">
                            <div className="divImageNews"> <a href="http://10.161.10.104:8886/pages/cms/newspaper-tren-24000-tin--bai-viet-ve-nganh-dien-duoc-phan-anh-da-chieu-tren-cac-to-bao-in-id-11.html"><img src="http://10.161.10.104:8886/pages/cms/img/DiemBao3.png" className="media-object" alt="" /></a></div>
                            <h4 className="media-heading divDescriptionNews" style={{ textAlign: 'center' }}><a href="http://10.161.10.104:8886/pages/cms/newspaper-bao-in-id-11.html">Báo in</a> </h4>
                            <div style={{ textAlign: 'center' }} className="divNewsHome">  <span style={{ verticalAlign: 'middle' }}>Trên 24.000 tin, bài viết về ngành Điện được phản ánh đa chiều trên các tờ báo in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    </section>
    )
}
export default NewsPaperHome
