
import React, { useReducer, useEffect, useState,Fragment } from 'react';
import { initState, initValues } from './InitState';
import { ActionCreators, reducer } from './Reducer';
import ENV from "services";
const HtmlToReactParser = require("html-to-react").Parser;
const htmlToReactParser = new HtmlToReactParser();
interface State {

}
type Props = State
const DetailNews = (props: Props) => {


  const [state, dispatch] = useReducer(reducer, initState)
  useEffect(() => {
    let ID = window.location.href.split('/')[window.location.href.split('/').length - 1]
    console.log("9999999999999", ID);
    let iID = 0;
    try {
      iID = Number(ID);
    } catch { }

    ActionCreators.DetailNews(dispatch, iID);
    ActionCreators.NewsOtherByID(dispatch, iID);
  }, [])

  return (
    state.item ?
      <>
        <section>
          <div className="containernews">
            <div className="col-sm-12">
              <div className="col-md-12 col-12">
                <div className="articleDetails">
                  <h4 className="articleTitle">{state.item.Title}</h4>
                  <span className="date text-muted "> <i className="fas fa-calendar-alt" /> {state.item.Created_Date_Format} </span>
                  <span className="NumberView">Số lượt xem: {state.item.View_Count} </span>
                  <hr id="hrcolorDetail" />
                  <div>
                     {htmlToReactParser.parse(state.item.Content)}
                  </div>
                  <p className="pAuthor" style={{ textAlign: 'right' }}>
                    <strong>{state.item.Author}</strong>
                  </p>
                  <p className="pSource" style={{ textAlign: 'right' }}>
                    <strong>{state.item.FromSource}</strong>
                  </p>
                  <div className="detailstool smalltext no-mobile right">
                    <a href="javascript:window.history.go(-1);" className="back"><i className="glyphicon glyphicon-arrow-left" />
                      Về trang trước</a>
                    <a href="javascript:window.scrollTo(0,0);" className="gotop"><i className="glyphicon glyphicon-arrow-up" /> Lên đầu trang</a>
                    <a href="javascript:window.print();" className="gotop"><i className="glyphicon glyphicon-print" /> In bài viết</a>
                  </div>
                </div>
              </div>
              <div className="row NewsOtherNewsDetail col-md-12 col-12">

                {
                  state.item_NewsOtherByID ?
                    state.item_NewsOtherByID.Results.map((item: any, index: number) => {
                      console.log("item_NewsOtherByID", state.item_NewsOtherByID)
                      return (
                        <>
                          <div className="col-sm-3 col-12" id="divCategoryNews">
                            <div className="card mb-4 shadow-sm">
                              <a href={"../DetailNews/"+item.Title_Format_Url +'/'+item.Id }><img alt="" className="card-img-top" style={{ height: '170px', width: '100%', display: 'block' }} src={ENV.URL_Nginx+item.Avatar} /></a>
                              <div className="card-title">
                                <h4>
                                  <a href={"../DetailNews/"+item.Title_Format_Url +'/'+item.Id } className="card-text">{item.Title}</a>
                                </h4>
                              </div>
                              <div className="card-body"> <p className="card-text">{item.Description}</p>
                              </div>
                              <div className="DateNewsDetailBottom d-flex justify-content-between align-items-center">
                                <span className="date text-muted fas fa-calendar-alt"> {item.Created_Date_Format} </span>
                                <div className="btn-group">
                                  <a href={"../DetailNews/"+item.Title_Format_Url +'/'+item.Id } style={{ float: 'right', margin: '10px' }}>Chi tiết</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )
                    })
                    : <></>

                }
{/* 

                <div className="col-sm-3 col-12" id="divCategoryNews">
                  <div className="card mb-4 shadow-sm">
                    <a href="news-he-thong-dien-voi-nang-luong-tai-tao--mo-phong-su-dung-psse®e-id-6694.html"><img alt="" className="card-img-top" style={{ height: '170px', width: '100%', display: 'block' }} src="http://10.161.10.104:8886/pages/cms/TempDir/cms/bib/27736/202101260424456017f670-08b0-44ae-b3ca-49afba8d381b/42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f.jpg" /></a>
                    <div className="card-title">
                      <h4>
                        <a href="news-he-thong-dien-voi-nang-luong-tai-tao--mo-phong-su-dung-psse®e-id-6694.html" className="card-text">Hệ thống điện với năng lượng tái tạo: Mô phỏng sử dụng PSSE®E</a>
                      </h4>
                    </div>
                    <div className="card-body"> <p className="card-text">Cuốn sách cung cấp cách xử lý toàn ...</p>
                    </div>
                    <div className="DateNewsDetailBottom d-flex justify-content-between align-items-center">
                      <span className="date text-muted fas fa-calendar-alt"> 12/06/2023 10:12 </span>
                      <div className="btn-group">
                        <a href="news-he-thong-dien-voi-nang-luong-tai-tao--mo-phong-su-dung-psse®e-id-6694.html" style={{ float: 'right', margin: '10px' }}>Chi tiết</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3 col-12" id="divCategoryNews">
                  <div className="card mb-4 shadow-sm">
                    <a href="news-can-nhac-khi-su-dung-phuong-phap-loc-tu-dong-cua-cac-he-thong-lam-mat-nuoc-kieu-thap-id-6688.html"><img alt="" className="card-img-top" style={{ height: '170px', width: '100%', display: 'block' }} src="http://10.161.10.104:8886/pages/cms/TempDir/cms/bib/27736/202101260424456017f670-08b0-44ae-b3ca-49afba8d381b/42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f.jpg" /></a>
                    <div className="card-title">
                      <h4>
                        <a href="news-can-nhac-khi-su-dung-phuong-phap-loc-tu-dong-cua-cac-he-thong-lam-mat-nuoc-kieu-thap-id-6688.html" className="card-text">Cân nhắc khi sử dụng phương pháp lọc tự động của các hệ thống làm mát nước kiểu tháp</a>
                      </h4>
                    </div>
                    <div className="card-body"> <p className="card-text">Tháp làm mát loại bỏ nhiệt thải ...</p>
                    </div>
                    <div className="DateNewsDetailBottom d-flex justify-content-between align-items-center">
                      <span className="date text-muted fas fa-calendar-alt"> 05/06/2023 14:01 </span>
                      <div className="btn-group">
                        <a href="news-can-nhac-khi-su-dung-phuong-phap-loc-tu-dong-cua-cac-he-thong-lam-mat-nuoc-kieu-thap-id-6688.html" style={{ float: 'right', margin: '10px' }}>Chi tiết</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3 col-12" id="divCategoryNews">
                  <div className="card mb-4 shadow-sm">
                    <a href="news-cong-nghe-chong-ro-ri-moi-giup-cac-tram-bien-ap-duy-tri-hoat-dong-trong-qua-trinh-sua-chua-sf6-id-6685.html"><img alt="" className="card-img-top" style={{ height: '170px', width: '100%', display: 'block' }} src="http://10.161.10.104:8886/pages/cms/TempDir/cms/bib/27736/202101260424456017f670-08b0-44ae-b3ca-49afba8d381b/42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f.jpg" /></a>
                    <div className="card-title">
                      <h4>
                        <a href="news-cong-nghe-chong-ro-ri-moi-giup-cac-tram-bien-ap-duy-tri-hoat-dong-trong-qua-trinh-sua-chua-sf6-id-6685.html" className="card-text">Công nghệ chống rò rỉ mới giúp các trạm biến áp duy trì hoạt động trong quá trình sửa chữa SF6</a>
                      </h4>
                    </div>
                    <div className="card-body"> <p className="card-text">Công ty công nghệ kỹ ...</p>
                    </div>
                    <div className="DateNewsDetailBottom d-flex justify-content-between align-items-center">
                      <span className="date text-muted fas fa-calendar-alt"> 05/06/2023 13:15 </span>
                      <div className="btn-group">
                        <a href="news-cong-nghe-chong-ro-ri-moi-giup-cac-tram-bien-ap-duy-tri-hoat-dong-trong-qua-trinh-sua-chua-sf6-id-6685.html" style={{ float: 'right', margin: '10px' }}>Chi tiết</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3 col-12" id="divCategoryNews">
                  <div className="card mb-4 shadow-sm">
                    <a href="news-kinh-nghiem-xu-ly-vu-mat-dien-ngoai-ke-hoach-tai-nha-may-dien-rocksavage-id-6684.html"><img alt="" className="card-img-top" style={{ height: '170px', width: '100%', display: 'block' }} src="http://10.161.10.104:8886/pages/cms/TempDir/cms/bib/27736/202101260424456017f670-08b0-44ae-b3ca-49afba8d381b/42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f.jpg" /></a>
                    <div className="card-title">
                      <h4>
                        <a href="news-kinh-nghiem-xu-ly-vu-mat-dien-ngoai-ke-hoach-tai-nha-may-dien-rocksavage-id-6684.html" className="card-text">Kinh nghiệm xử lý vụ mất điện ngoài kế hoạch tại Nhà máy điện Rocksavage</a>
                      </h4>
                    </div>
                    <div className="card-body"> <p className="card-text">Khi các vấn đề rắc rối xảy ra và ...</p>
                    </div>
                    <div className="DateNewsDetailBottom d-flex justify-content-between align-items-center">
                      <span className="date text-muted fas fa-calendar-alt"> 05/06/2023 10:49 </span>
                      <div className="btn-group">
                        <a href="news-kinh-nghiem-xu-ly-vu-mat-dien-ngoai-ke-hoach-tai-nha-may-dien-rocksavage-id-6684.html" style={{ float: 'right', margin: '10px' }}>Chi tiết</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3 col-12" id="divCategoryNews">
                  <div className="card mb-4 shadow-sm">
                    <a href="news-giai-phap-luoi-dien-sieu-nho-“tat-ca-trong-mot”-moi-id-6683.html"><img alt="" className="card-img-top" style={{ height: '170px', width: '100%', display: 'block' }} src="http://10.161.10.104:8886/pages/cms/TempDir/cms/bib/27736/202101260424456017f670-08b0-44ae-b3ca-49afba8d381b/42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f.jpg" /></a>
                    <div className="card-title">
                      <h4>
                        <a href="news-giai-phap-luoi-dien-sieu-nho-“tat-ca-trong-mot”-moi-id-6683.html" className="card-text">Giải pháp lưới điện siêu nhỏ “tất cả trong một” mới</a>
                      </h4>
                    </div>
                    <div className="card-body"> <p className="card-text">Công ty Schneider Electric (Pháp) thông báo họ đã phát hành EcoStruxure Microgrid Flex, một giải ...</p>
                    </div>
                    <div className="DateNewsDetailBottom d-flex justify-content-between align-items-center">
                      <span className="date text-muted fas fa-calendar-alt"> 05/06/2023 10:35 </span>
                      <div className="btn-group">
                        <a href="news-giai-phap-luoi-dien-sieu-nho-“tat-ca-trong-mot”-moi-id-6683.html" style={{ float: 'right', margin: '10px' }}>Chi tiết</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3 col-12" id="divCategoryNews">
                  <div className="card mb-4 shadow-sm">
                    <a href="news-kinh-nghiem-ap-dung-cac-bo-chong-set-duong-day-truyen-tai-tai-romania-id-6682.html"><img alt="" className="card-img-top" style={{ height: '170px', width: '100%', display: 'block' }} src="http://10.161.10.104:8886/pages/cms/TempDir/cms/bib/27736/202101260424456017f670-08b0-44ae-b3ca-49afba8d381b/42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f.jpg" /></a>
                    <div className="card-title">
                      <h4>
                        <a href="news-kinh-nghiem-ap-dung-cac-bo-chong-set-duong-day-truyen-tai-tai-romania-id-6682.html" className="card-text">Kinh nghiệm áp dụng các bộ chống sét đường dây truyền tải tại Romania</a>
                      </h4>
                    </div>
                    <div className="card-body"> <p className="card-text">Đường dây trên không 400kV Gutinas-Brasov ...</p>
                    </div>
                    <div className="DateNewsDetailBottom d-flex justify-content-between align-items-center">
                      <span className="date text-muted fas fa-calendar-alt"> 05/06/2023 10:29 </span>
                      <div className="btn-group">
                        <a href="news-kinh-nghiem-ap-dung-cac-bo-chong-set-duong-day-truyen-tai-tai-romania-id-6682.html" style={{ float: 'right', margin: '10px' }}>Chi tiết</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3 col-12" id="divCategoryNews">
                  <div className="card mb-4 shadow-sm">
                    <a href="news-giam-thieu-rui-ro-an-ninh-tram-bien-ap-bang-cac-giai-phap-theo-doi-khong-tiep-xuc-id-6681.html"><img alt="" className="card-img-top" style={{ height: '170px', width: '100%', display: 'block' }} src="http://10.161.10.104:8886/pages/cms/TempDir/cms/bib/27736/202101260424456017f670-08b0-44ae-b3ca-49afba8d381b/42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f42e7ff1c-abc7-4e6d-8cc1-61dcf4869e0f.jpg" /></a>
                    <div className="card-title">
                      <h4>
                        <a href="news-giam-thieu-rui-ro-an-ninh-tram-bien-ap-bang-cac-giai-phap-theo-doi-khong-tiep-xuc-id-6681.html" className="card-text">Giảm thiểu rủi ro an ninh trạm biến áp bằng các giải pháp theo dõi không tiếp xúc</a>
                      </h4>
                    </div>
                    <div className="card-body"> <p className="card-text">Cơ sở hạ tầng quan trọng, chẳng ...</p>
                    </div>
                    <div className="DateNewsDetailBottom d-flex justify-content-between align-items-center">
                      <span className="date text-muted fas fa-calendar-alt"> 05/06/2023 10:26 </span>
                      <div className="btn-group">
                        <a href="news-giam-thieu-rui-ro-an-ninh-tram-bien-ap-bang-cac-giai-phap-theo-doi-khong-tiep-xuc-id-6681.html" style={{ float: 'right', margin: '10px' }}>Chi tiết</a>
                      </div>
                    </div>
                  </div>
                </div> */}



              </div>
            </div>
          </div>
        </section>
      </>
      : <></>

  )
}
export default DetailNews
