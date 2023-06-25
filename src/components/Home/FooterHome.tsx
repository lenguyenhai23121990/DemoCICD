import React from "react"


interface State {

}
type Props = State
const FooterHome = (props: Props) => {

    return (
        
        
        <section>
        <footer className=" clearfix">
            <div className="row  divTextFooterLeft">
                <div className="col-md-7">
                    <address>
                        <div>
                            <div>
                                <address>
                                    <div style={{ display: 'inline-flex' }}>
                                        <div style={{ marginLeft: '15px' }}><a href="/pages/cms/staticnews-gioi-thieu-id-4.html" style={{ color: 'white'}}>Giới thiệu</a></div>
                                        <div style={{ marginLeft: '15px' }}><a href="/pages/cms/Category-tin-quoc-te-id-2.html" style={{ color: 'white' }}>Tin tức</a></div>
                                        <div style={{ marginLeft: '15px' }}><a href="/pages/cms/staticnews-quy-dinh-chung-id-5.html" style={{ color: 'white' }}>Quy định chung</a></div>
                                        <div style={{ marginLeft: '15px' }}><a href="/pages/cms/feedback-phan-hoi-id-1.html" style={{ color: 'white' }}>Gửi yêu cầu</a></div>
                                    </div>
                                    <div>
                                        <p><span style={{ color: '#a5d4ff', fontSize: '15px' }}>© 2020, Bản quyền thuộc về Trung tâm Thông tin Điện lực<br />
                                            Tầng 15, tháp A, tòa nhà EVN, 11 Cửa Bắc phường Trúc Bạch, Quận Ba Đình, TP Hà Nội.</span></p>
                                    </div>
                                </address>
                            </div>
                            <div>&nbsp;</div>
                        </div>          </address>
                </div>
                <div className="col-md-4 col-md-offset-1 statistic">
                    <ul id="list-social-icon">
                        <li><span id="spanFollowus">Follow us</span></li>
                        <li><a className="ico-facebook" target="_blank" href="https://www.facebook.com/evndienlucvietnam"><span className="fa fa-facebook" /></a></li>
                        <li><a className="ico-youtube" target="_blank" href="https://www.youtube.com/c/DIENLUCVIETNAM_EVNnews/featured"><span className="fa fa-youtube" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </section>
    )
}
export default FooterHome
