import React, { useReducer, useEffect, useState } from 'react';
import { initState, initValues } from './InitState';
import { ActionCreators, reducer } from './Reducer';
import ENV from "services";
import Carousel from 'react-bootstrap/Carousel';



interface State {

}
type Props = {
    Keyword?: string;
    Cate?: string;
}
const BannerHeader = (props: Props) => {
    const [KeywordGet, setKeywordGet] = React.useState("");
    const [CategoryBibGet, setCategoryBibGet] = React.useState("all");
    const [state, dispatch] = useReducer(reducer, initState)
    const ClientSearch = () => {
        window.open('/SearchParam/' + KeywordGet + '/' + CategoryBibGet);
    }

    useEffect(() => {
        ActionCreators.GetLOGO_BANNER_HOME(dispatch);

    }, [])

    return (

        <Carousel>
            {
                state.item.Results &&
                    state.item.Results.map((item: any, index: number) => {
                        console.log("item.Title", state)
                        return (
                                <Carousel.Item>
                                    <Carousel.Caption>
                                        {/* <h3>Second slide label</h3> */}
                                        <p>{item.Title}</p>

                                        <div className="row col-md-12" id="searchBanner">
                                            <div className="container">
                                                <div className="row">
                                                    <input type="text" id="txtKeyword" onChange={e => setKeywordGet(e.target.value)}
                                                        // onKeyDown={javascript:if (event.keyCode == 13) {ClientSearchNews();}} 
                                                        onKeyDown={e => e.keyCode == 13 ? ClientSearch() : ''}
                                                        className="form-control span12" placeholder="Từ khóa...." />
                                                        <select className="form-control" id="cboCateChild" onChange={e => { setCategoryBibGet(e.target.value) }}>
                                                        <option value="all">CHỌN TIÊU CHÍ TÌM KIẾM</option>
                                                        <option value="title">Nhan đề</option>
                                                        <option value="author">Tác giả</option>
                                                        <option value="subject">Chủ đề</option>
                                                        <option value="keyword">Từ khóa</option>
                                                        <option value="yearpub">Năm xuất bản</option>
                                                    </select>
                                                    <a href="javascript:ClientSearchNews();" style={{ cursor: "pointer" }} id="btnSearchHome" className="form-control"><i className="fa fa-search" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Caption>
                                    <img className="bd-placeholder-img imageBannerCarousel" width="100%" height="100%" src={ENV.URL_Nginx+item.LinkImagerBanner} />
                                </Carousel.Item>

                        )
                    })

            }

        </Carousel>

    )
}

export default BannerHeader
