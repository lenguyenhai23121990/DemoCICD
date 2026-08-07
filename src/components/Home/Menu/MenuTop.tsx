import React, { useReducer, useEffect, useState } from 'react';
import { initState, initValues } from './InitState';
import { ActionCreators, reducer } from './Reducer';
import mdihomeoutline from "../../../assets/Image/mdi_home-outline.png";


interface State {

}

type Props = State
const MenuTop = (props: Props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    // useEffect(() => {
        

    //     // const script2 = document.createElement('script');
    //     // script2.src = "http://thuvienquandoi.vn/pages/cms/js/jquery.min.js";
    //     // //script.async = true;
    //     // document.head.appendChild(script2);

    //     // const script1 = document.createElement('script');
    //     // script1.src = "http://thuvienquandoi.vn/pages/cms/js/bootstrap.min.js";
    //     // //script.async = true;
    //     // document.head.appendChild(script1);

    //     // const script = document.createElement('script');
    //     // script.src = "http://thuvienquandoi.vn/pages/cms/js/bootstrap-hover-dropdown.min.js";
    //     // //script.async = true;
    //     // document.head.appendChild(script);
    //     // return () => {
            
    //     // //     document.head.removeChild(script2);
    //     // //     document.head.removeChild(script1);
    //     // //   document.head.removeChild(script);
    //     // }
    //   }, []);
    useEffect(() => {
        ActionCreators.ListMenu(dispatch);

    }, [])
    const RenderSubMenu = (Id: Number) => {
        let html_li: any = [];
        let html_ul: any = [];
        var dataSubMenu = state.item.Results
        state.item.Results.map((item: any, index: number) => {
            if (item.Parent_Id==Id){
                html_li.push(
                    
                    <li className='dropdown-submenu'>
                        <a href="javascript:void(0);" 
                            //onclick="ClientAddClickLink('MenuLeft','2015101509541785a4358c-141d-409c-b26b-20357f1e3499')" 
                            target="_self" className='dropdown-toggle' data-toggle="dropdown" 
                            aria-expanded="false">{item.Title}
                        </a>
                    </li>

                );
            }
        })

        console.log("html_lihtml_lihtml_lihtml_li",html_li); 

        if (html_li.length>0){
            html_ul.push(
                <ul className="dropdown-menu multi-level"> 
                       {html_li}
                </ul>
    
            );
        }
        console.log("html_ulhtml_ulhtml_ul",html_ul);

        return html_ul;

    }
    console.log("statemenu", state);
    return (
        
        <section>
            <div className="col-md-12 col-12 divpadingZero" >
                <nav className="nav  navbar navbar-expand-md navbar navbar-light topMenu" role="navigation">
                    <div className="container-fluid">
                        <div>
                            <ul className="nav navbar-nav">
                                <li className="nav-item align-self-center  "><a href="/Home"><img src={mdihomeoutline} /></a></li>
                                {
                                    state.item ?
                                        state.item.Results ?
                                            state.item.Results.map((item: any, index: number) => {
                                                if (item.Parent_Id==null||item.Parent_Id=="0"){
                                                    return (
                                                        <>
                                                            <li className=""><a data-toggle="dropdown" className='dropdown-toggle' data-hover="dropdown" data-close-others="true"  aria-expanded="false" href={item.Url} target="_self">{item.Title}</a>
                                                            {RenderSubMenu(item.Id)}
                                                            <ul className='dropdown-menu multi-level'> 
                                                                <li><a href="../cms/news.aspx?wpid=StaticRender&amp;did=2016102810362394e23e17-ae16-40c7-a4a1-ad42ca7a1419" target="_self">Lịch sử hình thành</a></li> 
                                                                <li><a href="../cms/news.aspx?wpid=StaticRender&amp;did=20161028021508b2cc1512-661c-492e-b25d-a34a2010ca0d" target="_self">Chức năng nhiệm vụ</a></li> 
                                                                <li><a href="../cms/news.aspx?wpid=StaticRender&amp;did=20161027100303ee31f3ee-0dd6-43eb-ba34-d28d99cada5a" target="_self">Sản phẩm thông tin</a></li> 
                                                                <li><a href="../cms/news.aspx?wpid=StaticRender&amp;did=20161027100451ced9c998-0489-4287-9bb2-9be5aae6df2a" target="_self">Hệ thống Phòng đọc, phòng Mượn</a></li> 
                                                                <li><a href="../cms/news.aspx?wpid=NewsCategoryRender&amp;did=abd8e893-e7dd-4f9f-a7a9-641bb1b2a41a" target="_self">Hướng dẫn sử dụng Thư viện</a></li> 
                                                                <li><a href="../cms/news.aspx?wpid=StaticRender&amp;did=2019103009254637a1287d-78c3-4afb-b93f-03a0594e98b5" target="_self">Nguồn lực thông tin</a></li> 
                                                            </ul>
                                                            </li>
                                                            
                                                        </>
                                                    )
                                                }
                                                
                                            })
                                            : <></>
                                        : <></>

                                }


                                {/* <li className="align-self-center "><a href="/Search" target="_self">TRA CỨU DỮ LIỆU</a></li>
                                <li className="align-self-center "><a href="/CollectionHome">BỘ SƯU TẬP</a></li>
                                <li className="align-self-center "><a href="/CategoryNews" target="_self">ĐIỂM BÁO</a></li> */}
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
