import React,{useRef, useState ,useEffect } from "react";
import SearchService from '../../services/SearchService';
import XemChiTiet from "../../assets/Image/XemChiTiet.png"

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
  const [CategoryBibGet, setCategoryBibGet] = React.useState("all");
  const [KeywordQuickSearchGet, setKeywordQuickSearchGet] = React.useState("");
  const [CateSearchUrl, setCateSearchUrl] = React.useState("");
  const [KeywordUrl, setKeywordUrl] = React.useState("");
  const inputRef = useRef(null);

  
  useEffect(() => {
    console.log("sjdhshds",window.location.href.split('/').length);
    if (window.location.href.split('/').length==6 && window.location.href.indexOf("SearchParam")>0 ){
      let cateSearch = window.location.href.split('/')[window.location.href.split('/').length-1]
      if(cateSearch==undefined){
        cateSearch="";
      }
      let Keyword = window.location.href.split('/')[window.location.href.split('/').length-2]
      setKeywordQuickSearchGet(decodeURIComponent(Keyword));
      setCategoryBibGet(cateSearch);
    }
   
  }, [])

  const ClientSearch=()=>
{

    window.open('/SearchParam/'+KeywordQuickSearchGet+'/'+CategoryBibGet);
}
    return (
        <section>
          <div>
          <div id="ImageTopBanner" className="carousel slide" data-ride="carousel">
            <img src={XemChiTiet} alt="" />
            <div className="row col-md-12" id="searchBannerSubPage">
              <div className="container">
                <div className="row">
                  <input type="text" id="txtKeyword" defaultValue={KeywordQuickSearchGet} onChange={e => setKeywordQuickSearchGet(e.target.value)}
                    //  onkeydown="javascript:if (event.keyCode == 13) {ClientSearchNews();}"
                    onKeyDown={e => e.keyCode == 13 ? ClientSearch() : ''}
                    className="form-control span12" placeholder="Từ khóa...." />
                  <select className="form-control" id="cboCateChild"  value={CategoryBibGet}  onChange={e => { setCategoryBibGet(e.target.value) }} >
                    <option value="all">CHỌN TIÊU CHÍ TÌM KIẾM</option>
                    <option value="title">Nhan đề</option>
                    <option value="author">Tác giả</option>
                    <option value="subject">Chủ đề</option>
                    <option value="keyword">Từ khóa</option>
                    <option value="yearpub">Năm xuất bản</option>
                  </select>
                  <a onClick={() => ClientSearch()} style={{ cursor: "pointer" }} id="btnSearchHome" className="form-control"><i className="fa fa-search" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    )
}
export default BannerDetail
