import React, { useReducer, useEffect, useState } from 'react';
import { initState, initValues } from './InitState';
import { ActionCreators, reducer } from './Reducer';
import ENV from "services";
import ImageNews from "../../../assets/Image/7e93b110-44b5-47ad-9972-2c77ae9125daimage003.jpg";
interface State {

}
type Props = State
const NewsHome = (props: Props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const [CategotyID, setCategotyID] = React.useState(0);
    const [CategotyName, setCategotyName] = React.useState("");
    useEffect(() => {
        ActionCreators.TopNewsHome(dispatch, 3);
    }, [])

    const SetCategory = (CategotyIDSet: number, CategotyNameSet: string) => {
        if (CategotyID<=0){
            setCategotyID(CategotyIDSet);
            setCategotyName(CategotyNameSet);
        }
        
    }
    {console.log("034803480348384",state.item)}
    return (
        

        <section>
            <div className="containernews">
                <div className="col-sm-12">
                    <section className="homeTopBlock ModuleTop">
                        <h3 className="header1"><a href={"../CategoryNews/"+CategotyName +'/'+CategotyID } >TIN TỨC</a><hr id="hrcolor" /></h3>
                        <div className="row">
                            {/* focus news */}
                            {

                                state.item.Results ?
                                    state.item.Results.map((item: any, index: number) => {
                                        console.log("item.Title", state)
                                        
                                        
                                        return (
                                            <>
                                                {SetCategory(item.CategoryID,item.CategoryName)}
                                                <div className="col-md-4 col-12">
                                                    <div className="card mb-4 shadow-sm" id="divFocusNews">
                                                    {/* href={"../DetailBook/"+item.TITLES_UNS+'/'+item.ID} */}
                                                        <a href={"../DetailNews/"+item.Title_Format_Url +'/'+item.Id } title={item.Title}><img  loading="lazy" className="card-img-top" src={ENV.URL_Nginx+item.Avatar} alt={item.Title} /></a>
                                                        <div className="card-title"><h3 ><a href={"../DetailNews/"+item.Title_Format_Url +'/'+item.Id } title={item.Title}>{item.Title}</a></h3></div>
                                                        <div className="card-body">          <p className="card-text">{item.Description} </p>
                                                        </div>
                                                        <div className="DateNewsBottom d-flex justify-content-between align-items-center">
                                                            <span className="date text-muted fas fa-calendar-alt"> {item.Created_Date_Format}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                    : ""

                            }

                            {/* <div className="col-md-4 col-12">
                                    <div className="card mb-4 shadow-sm" id="divFocusNews">
                                        <a href="news-giai-phap-truyen-du-lieu-can-than-ho-tro-giam-sat-dot-than-tron-tai-nhiet-dien-vinh-tan-2-id-6698.html" title="Giải pháp truyền dữ liệu cân than hỗ trợ giám sát đốt than trộn tại Nhiệt điện Vĩnh Tân 2"><img className="card-img-top" src={ImageNews} alt="Giải pháp truyền dữ liệu cân than hỗ trợ giám sát đốt than trộn tại Nhiệt điện Vĩnh Tân 2" /></a>
                                        <div className="card-title"><h3 ><a href="news-giai-phap-truyen-du-lieu-can-than-ho-tro-giam-sat-dot-than-tron-tai-nhiet-dien-vinh-tan-2-id-6698.html" title="Giải pháp truyền dữ liệu cân than hỗ trợ giám sát đốt than trộn tại Nhiệt điện Vĩnh Tân 2">Giải pháp truyền dữ liệu cân than hỗ trợ giám sát đốt than trộn tại Nhiệt điện Vĩnh Tân 2</a></h3></div>
                                        <div className="card-body">          <p className="card-text">Trong thời gian vừa qua, Công ty Nhiệt điện Vĩnh Tân đã phát động phong trào học tập, nghiên ... </p>
                                        </div>
                                        <div className="DateNewsBottom d-flex justify-content-between align-items-center">
                                            <span className="date text-muted fas fa-calendar-alt"> 17/06/2023 08:00 </span>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-4 col-12">
                                    <div className="card mb-4 shadow-sm" id="divFocusNews">
                                        <a href="news-he-thong-dien-voi-nang-luong-tai-tao--mo-phong-su-dung-psse®e-id-6694.html" title="Hệ thống điện với năng lượng tái tạo: Mô phỏng sử dụng PSSE®E"><img className="card-img-top" src={ImageNews} alt="Hệ thống điện với năng lượng tái tạo: Mô phỏng sử dụng PSSE®E" /></a>
                                        <div className="card-title"><h3 ><a href="news-he-thong-dien-voi-nang-luong-tai-tao--mo-phong-su-dung-psse®e-id-6694.html" title="Hệ thống điện với năng lượng tái tạo: Mô phỏng sử dụng PSSE®E">Hệ thống điện với năng lượng tái tạo: Mô phỏng sử dụng PSSE®E</a></h3></div>
                                        <div className="card-body">          <p className="card-text">Cuốn sách cung cấp cách xử lý toàn diện các chủ đề khác nhau liên quan đến hệ thống điện với trọng tâm là tích hợp năng lượng tái tạo ... </p>
                                        </div>
                                        <div className="DateNewsBottom d-flex justify-content-between align-items-center">
                                            <span className="date text-muted fas fa-calendar-alt"> 16/06/2023 10:46 </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="card mb-4 shadow-sm" id="divFocusNews">
                                        <a href="news-thuy-dien-thac-mo--nang-cao-hieu-suat-lao-dong-tu-phan-mem--quan-ly-kinh-doanh-thi-truong-dien--id-6703.html" title="Thủy điện Thác Mơ: Nâng cao hiệu suất lao động từ phần mềm 'Quản lý kinh doanh thị trường điện'"><img className="card-img-top" src={ImageNews} alt="Thủy điện Thác Mơ: Nâng cao hiệu suất lao động từ phần mềm 'Quản lý kinh doanh thị trường điện'" /></a>
                                        <div className="card-title"><h3 ><a href="news-thuy-dien-thac-mo--nang-cao-hieu-suat-lao-dong-tu-phan-mem--quan-ly-kinh-doanh-thi-truong-dien--id-6703.html" title="Thủy điện Thác Mơ: Nâng cao hiệu suất lao động từ phần mềm 'Quản lý kinh doanh thị trường điện'">Thủy điện Thác Mơ: Nâng cao hiệu suất lao động từ phần mềm 'Quản lý kinh doanh thị trường điện'</a></h3></div>
                                        <div className="card-body">          <p className="card-text">Phần mềm “Quản lý kinh doanh thị trường điện” do nhóm tác giả gồm Thạc sĩ Đào Nguyên Hạnh, ... </p>
                                        </div>
                                        <div className="DateNewsBottom d-flex justify-content-between align-items-center">
                                            <span className="date text-muted fas fa-calendar-alt"> 15/06/2023 10:56 </span>
                                        </div>
                                    </div>
                                </div> */}

                        </div>
                    </section>
                </div>
            </div>
        </section>

    )
}
export default NewsHome
