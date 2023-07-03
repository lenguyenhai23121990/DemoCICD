import React,{useRef, useState } from "react";
import SearchService from '../../services/SearchService';
interface State {

}
type Props = {
  Keyword?:string;
  CategoryBib?:string;
  MethodParent?:any;
}

const BannerDetail = (props: Props) => {
  const [ResultSearch, setResultSearch] = useState();
  const [KeywordGet, setKeywordGet] = React.useState(props.Keyword);
  const [CategoryBibGet, setCategoryBibGet] = React.useState(props.CategoryBib);
  const inputRef = useRef(null);
  const ClientSearchNews=()=>
  {
    props.MethodParent(KeywordGet, CategoryBibGet);
  }
    return (
        <section>
         <div>
        <div id="ImageTopBanner" className="carousel slide" data-ride="carousel"> 
          <img src="http://10.161.10.104:8886/pages/cms/img/XemChiTiet.png" alt="" /> 
          <div className="row col-md-12" id="searchBannerSubPage">  
            <div className="container"> 
              <div className="row">
                <input type="text" id="txtKeyword" onChange={e => setKeywordGet(e.target.value)} 
                //  onkeydown="javascript:if (event.keyCode == 13) {ClientSearchNews();}"
                  className="form-control span12" placeholder="Từ khóa...." />  
                <select className="form-control" id="cboCateChild"  onChange={e => {setCategoryBibGet( e.target.value)}} > 
                  <option value="">CHỌN TIÊU CHÍ TÌM KIẾM</option> 
                  <option value="title">Nhan đề</option> 
                  <option value="author">Tác giả</option> 
                  <option value="subject">Chủ đề</option> 
                  <option value="keyword">Từ khóa</option> 
                  <option value="yearpub">Năm xuất bản</option> 
                </select> 
                <a  onClick={()=>ClientSearchNews()} id="btnSearchHome" className="form-control"><i className="fa fa-search" /></a>    
              </div> 
            </div> 
          </div> 
        </div>
      </div>
    </section>
    )
}
export default BannerDetail
