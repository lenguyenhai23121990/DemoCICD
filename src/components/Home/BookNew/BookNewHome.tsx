
import ImageNews from "../../../assets/Image/kinh-doanh-quoc-te.jpg";
import React, { useReducer, useEffect,useState } from 'react'
import { initState, initValues } from './InitState';
import { ActionCreators, reducer } from './Reducer';
import ENV from "services";
interface State {

}
export type Props = {
}

const BookNewHome = (props: Props) => {
    const [state, dispatch] = useReducer(reducer, initState)
    console.log(window.location)
    useEffect(() => {
        ActionCreators.GetBookNew(dispatch, 5);
    }, [])
    // const StyleBook = (Index: any) => {
    //     if(Index>0){
    //         return "marginLeft: '20px'";
    //     }
    //     else{
    //         return "";
    //     }
        
    // }
    
    { console.log("state1111112345", state) }

    return (

        <section>
            <div className="containernews">
                <div className="col-sm-12" id="maincollLoading"><section className="news">
                    <h3 className="header1"><a>Tài liệu mới</a><hr id="hrcolor" /></h3>
                    <div className="row divNewBook">

                        {

                                state.item.Results ?
                                // <div className="sssssssssssssslnhai">{state.item.Results[1].ID}</div>
                                // :""
                                state.item.Results.map((item: any, index: number) => {
                               
                                    return (
                                        <>
                                            <div className="divBookNew">
                                                <div style={{marginLeft: index>=0 ?'15px':'0px', marginRight: index==4?'15px':'0px'}} >
                                                    <a href={"../DetailBook/"+item.TITLES_UNS+'/'+item.ID} title={item.TITLE}><img id="imgNewBookHome" className="card-img-top" src={ENV.URL_Nginx+item.COVER_PHOTO} alt={item.TITLE} /></a>
                                                    <div className="middle">
                                                        <div className="text"><a href={"../DetailBook/"+item.TITLES_UNS+'/'+item.ID} title={item.TITLE}> XEM CHI TIẾT </a><a /></div><a>
                                                        </a>
                                                    </div>
                                                    <a>
                                                    </a>
                                                </div>
                                                <a>
                                                </a>
                                            </div>
                                            <a>
                                            </a>
                                        </>
                                    )
                                })
                                : ""


                        }


                        {/* <div className="divBookNew"><a>
                        </a><div style={{ marginLeft: '20px' }}><a>
                        </a><a href="/pages/cms/viewdetail-ban-tin-evn---so-20-(2023)-id-143583.html" title="Bản tin EVN - Số 20 (2023)"><img id="imgNewBookHome" className="card-img-top" src={ImageNews} alt="Bản tin EVN - Số 20 (2023)" /></a>
                                <div className="middle">
                                    <div className="text"><a href="/pages/cms/viewdetail-ban-tin-evn---so-20-(2023)-id-143583.html" title="Bản tin EVN - Số 20 (2023)"> XEM CHI TIẾT </a><a /></div><a>
                                    </a></div><a>
                                </a></div><a>
                            </a></div><a>
                        </a><div className="divBookNew"><a>
                        </a><div style={{ marginLeft: '20px' }}><a>
                        </a><a href="/pages/cms/viewdetail-tap-chi-cong-nghiep---tieu-dung---so-6-(2016)-id-143582.html" title="Tạp chí Công nghiệp & Tiêu dùng - Số 6 (2016)"><img id="imgNewBookHome" className="card-img-top" src={ImageNews} alt="Tạp chí Công nghiệp & Tiêu dùng - Số 6 (2016)" /></a>
                                <div className="middle">
                                    <div className="text"><a href="/pages/cms/viewdetail-tap-chi-cong-nghiep---tieu-dung---so-6-(2016)-id-143582.html" title="Tạp chí Công nghiệp & Tiêu dùng - Số 6 (2016)"> XEM CHI TIẾT </a><a /></div><a>
                                    </a></div><a>
                                </a></div><a>
                            </a></div><a>
                        </a><div className="divBookNew"><a>
                        </a><div style={{ marginLeft: '20px' }}><a>
                        </a><a href="/pages/cms/viewdetail-tap-chi-cong-nghiep---tieu-dung---so-5-(2016)-id-143581.html" title="Tạp chí Công nghiệp & Tiêu dùng - Số 5 (2016)"><img id="imgNewBookHome" className="card-img-top" src={ImageNews} alt="Tạp chí Công nghiệp & Tiêu dùng - Số 5 (2016)" /></a>
                                <div className="middle">
                                    <div className="text"><a href="/pages/cms/viewdetail-tap-chi-cong-nghiep---tieu-dung---so-5-(2016)-id-143581.html" title="Tạp chí Công nghiệp & Tiêu dùng - Số 5 (2016)"> XEM CHI TIẾT </a><a /></div><a>
                                    </a></div><a>
                                </a></div><a>
                            </a></div><a>
                        </a><div className="divBookNew"><a>
                        </a><div style={{ marginLeft: '20px' }}><a>
                        </a><a href="/pages/cms/viewdetail-tap-chi-cong-nghiep---tieu-dung---so-4-(2016)-id-143580.html" title="Tạp chí Công nghiệp & Tiêu dùng - Số 4 (2016)"><img id="imgNewBookHome" className="card-img-top" src={ImageNews} alt="Tạp chí Công nghiệp & Tiêu dùng - Số 4 (2016)" /></a>
                                <div className="middle">
                                    <div className="text"><a href="/pages/cms/viewdetail-tap-chi-cong-nghiep---tieu-dung---so-4-(2016)-id-143580.html" title="Tạp chí Công nghiệp & Tiêu dùng - Số 4 (2016)"> XEM CHI TIẾT </a><a /></div><a>
                                    </a></div><a>
                                </a></div><a>
                            </a></div>
                            <a>
                        </a> */}


                    </div><a>
                    </a></section><a>
                    </a></div>
            </div>
        </section>
    )
}
export default BookNewHome
