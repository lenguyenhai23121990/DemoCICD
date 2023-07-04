import React, { useReducer, useState } from "react"
import InfomationHome from '../../../components/Home/InfomationHome'
import ComponentsModuleSearch from '../../../components/Search/FromSearch'
import BannerDetail from '../../../components/DetailBook/BannerDetail'
import ComponentsModuleResultSearch from '../../../components/Search/FromResultSearch'
import { initState, initValues } from './InitState';
import { ActionCreators, reducer } from './Reducer';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import XemChiTiet from "../../../assets/Image/XemChiTiet.png"
import { any } from "prop-types"
// import SearchModel from './Model';
interface State {

}
type Props = {
}
const FromSearch = (props: Props) => {

  const [state, dispatch] = useReducer(reducer, initState)
  const [DataDetailControl, setDataDetailControl] = useState(null);

  const [TitleGet, setTitleGet] = React.useState("");
  const [AuthorGet, setAuthorGet] = React.useState("");
  const [KeywordGet, setKeywordGet] = React.useState("");
  const [SubjectGet, setSubjectGet] = React.useState("");
  const [YearPubGet, setYearPubGet] = React.useState("");
  const [UnsignedGet, setUnsignedGet] = React.useState(false);
  const [TitleExactlyGet, setTitleExactlyGet] = React.useState(false);
  const [AuthorExactlyGet, setAuthorExactlyGet] = React.useState(false);
  const [KeywordExactlyGet, setKeywordExactlyGet] = React.useState(false);
  const [SubjectExactlyGet, setSubjectExactlyGet] = React.useState(false);
  const [YearPubExactlyGet, setYearPubExactlyGet] = React.useState(false);

  const [KeywordQuickSearchGet, setKeywordQuickSearchGet] = React.useState("");
  const [CategoryBibGet, setCategoryBibGet] = React.useState("");
  const [CurrentPage, setCurrentPage] = React.useState(0);
  const [collapseTwoRSBibType, setcollapseTwoRSBibType] = React.useState("panel-collapse collapse ");
  const [collapseTwoRSKeyword, setcollapseTwoRSKeyword] = React.useState("panel-collapse collapse   ");
  const [collapseTwoRSAuthor, setcollapseTwoRSAuthor] = React.useState("panel-collapse collapse   ");
  const [collapseTwoRSPubyear, setcollapseTwoRSPubyear] = React.useState("panel-collapse collapse   ");
  const [collapseTwoRSSubject, setcollapseTwoRSSubject] = React.useState("panel-collapse collapse  ");
  
  const [CateSearch, setCateSearch] = React.useState("");
  const [ParaSearch, setParaSearch] = React.useState<any>();
  const [KeywordQuickSearch, setKeywordQuickSearch] = React.useState("");

  const [orderby, setorderby] = React.useState("ID");
  const [pageSize, setpageSize] = React.useState(10);
  //const [MaxpageCount, setMaxpageCount] = React.useState(0);
  
  // const MethodParent = (KeywordGet: any, CategoryBibGet: any) => {

  //   console.log("KeywordKeywordKeywordKeyword" + KeywordGet);
  //   console.log("KeywordGet", CategoryBibGet);
  //   // setKeywordGet(props.Keyword?.toString());
  //   // setCategoryBibGet(props.CategoryBib);
  //   ActionCreators.QuickSearch(dispatch, KeywordGet, CategoryBibGet);
  // }
  //CateSearch,CateRefind,state.items_Authors_Search.CurrentPage+1
const ShowMoreRefind =(CateSearch:string, CateRefind:string ,page:number)=>{
    var ipageSize=page*10;
  if(CateSearch=='basicsearch'){
    ParaSearch.ipageSize =page;
    if(CateRefind=='author')
    {
      console.log("1111111111",page);
      ActionCreators.BasicSearch_Refind_Author(dispatch, ParaSearch);
    }
    else if(CateRefind=='pubyear'){
      ActionCreators.BasicSearch_Refind_PubYear(dispatch, ParaSearch);
    }
    else if(CateRefind=='keyword'){
      ActionCreators.BasicSearch_Refind_Keyword(dispatch, ParaSearch);
    }
    else if(CateRefind=='Subject'){
      ActionCreators.BasicSearch_Refind_Subject(dispatch, ParaSearch);
    }
  }
  else {
    ParaSearch.page =page;

    if(CateRefind=='author')
    {
      ActionCreators.QuickSearch_Refind_Author(dispatch, ParaSearch);
    }
    else if(CateRefind=='pubyear'){
      ActionCreators.QuickSearch_Refind_PubYear(dispatch, ParaSearch);
    }
    else if(CateRefind=='keyword'){
      ActionCreators.QuickSearch_Refind_Keyword(dispatch, ParaSearch);
    }
    else if(CateRefind=='Subject'){
      ActionCreators.QuickSearch_Refind_Subject(dispatch, ParaSearch);
    }
  }
}

const ClientSearchItem_Sort = (page: number , pageSize:number, orderby:string ) => {
  if (CateSearch=='basicsearch'){
    setorderby(orderby);
    setpageSize(pageSize);
    setCurrentPage(page);
    var ModelSearch =
    {
      Page:page,
      PageSize: pageSize,
      TITLE: TitleGet,
      AUTHOR: AuthorGet,
      YEAR_PUB: YearPubGet.length <= 0 ? 0 : parseInt(YearPubGet),
      KEYWORDS: KeywordGet,
      SUBJECTS: SubjectGet,
      BIB_TYPE: CategoryBibGet.length <= 0 ? 0 : parseInt(CategoryBibGet),
      Is_Unsigned: UnsignedGet,
      Title_Exactly: TitleExactlyGet,
      Author_Exactly: AuthorExactlyGet,
      Keyword_Exactly: KeywordExactlyGet,
      Subject_Exactly: SubjectExactlyGet,
      Yearpub_Exactly: YearPubExactlyGet,
      OrderBy: orderby
    }
    setParaSearch(ModelSearch);
    ActionCreators.BasicSearch(dispatch, ModelSearch);
  }
  else
  {
    setorderby(orderby);
    setpageSize(pageSize);
    setCurrentPage(page);
    var ModelSearchQuickSearch =
    {
      Page:page,
      PageSize: pageSize,
      KeywordSearchFondEnd: KeywordQuickSearch,
      CateSearchFondEnd: CateSearch,
      OrderBy: orderby
    }
    setParaSearch(ModelSearchQuickSearch);
    ActionCreators.QuickSearch(dispatch, ModelSearchQuickSearch);
  }
}

const ClientSearchItem = (page: number , pageSize:number, orderby:string ) => {
    setorderby(orderby);
    setpageSize(pageSize);
    setCurrentPage(page);
    setCateSearch('basicsearch');
    console.log("Title", TitleGet);
    console.log("Un", UnsignedGet);
    console.log("TitleEx", TitleExactlyGet);
    console.log("CategoryBibGet", CategoryBibGet);
    console.log("orderbyorderbyorderby", orderby);
    var ModelSearch =
    {
      Page:page,
      PageSize: pageSize,
      TITLE: TitleGet,
      AUTHOR: AuthorGet,
      YEAR_PUB: YearPubGet.length <= 0 ? 0 : parseInt(YearPubGet),
      KEYWORDS: KeywordGet,
      SUBJECTS: SubjectGet,
      BIB_TYPE: CategoryBibGet.length <= 0 ? 0 : parseInt(CategoryBibGet),
      Is_Unsigned: UnsignedGet,
      Title_Exactly: TitleExactlyGet,
      Author_Exactly: AuthorExactlyGet,
      Keyword_Exactly: KeywordExactlyGet,
      Subject_Exactly: SubjectExactlyGet,
      Yearpub_Exactly: YearPubExactlyGet,
      OrderBy: orderby
    }
    setParaSearch(ModelSearch);
    ActionCreators.BasicSearch(dispatch, ModelSearch);
    ActionCreators.BasicSearch_Refind_BibType(dispatch, ModelSearch);
    ActionCreators.BasicSearch_Refind_Author(dispatch, ModelSearch);
    ActionCreators.BasicSearch_Refind_Keyword(dispatch, ModelSearch);
    ActionCreators.BasicSearch_Refind_PubYear(dispatch, ModelSearch);
    ActionCreators.BasicSearch_Refind_Subject(dispatch, ModelSearch);
    setcollapseTwoRSBibType("panel-collapse collapse in show");
    
    console.log("3333333333333333333 lnhai", state);
  }
  const ClientQuickSearch = (page: number , pageSize:number, orderby:string , Keyword:string , CateSearch: string ) => {

    console.log("Title", TitleGet);
    console.log("Un", UnsignedGet);
    console.log("TitleEx", TitleExactlyGet);
    console.log("CategoryBibGet", CategoryBibGet);
    console.log("orderbyorderbyorderby", orderby);
    setCateSearch('quicksearch');
    setorderby(orderby);
    setpageSize(pageSize);
    setCurrentPage(page);
    setKeywordQuickSearch(CateSearch);
    var ModelSearch =
    {
      Page:page,
      PageSize: pageSize,
      KeywordSearchFondEnd: Keyword,
      CateSearchFondEnd: CateSearch,
      OrderBy: orderby
    }
    setParaSearch(ModelSearch);
    ActionCreators.QuickSearch(dispatch, ModelSearch);
    ActionCreators.QuickSearch_Refind_BibType(dispatch, ModelSearch);
    ActionCreators.QuickSearch_Refind_Author(dispatch, ModelSearch);
    ActionCreators.QuickSearch_Refind_Keyword(dispatch, ModelSearch);
    ActionCreators.QuickSearch_Refind_PubYear(dispatch, ModelSearch);
    ActionCreators.QuickSearch_Refind_Subject(dispatch, ModelSearch);
    setcollapseTwoRSBibType("panel-collapse collapse in show");
    
  }

  const handleChangeUnsigned = (event: any) => {
    setUnsignedGet(event.target.checked);
  }
  const ShowHideRefindSeach=(CateRefindSearch:string) =>{
    //collapseTwoRSBibType
    var attribute = document.getElementById(CateRefindSearch);
    if (attribute){
      let exampleAttr = attribute.getAttribute("class");
      let IndexShow =exampleAttr?.indexOf("show");
      if (IndexShow)
      {
       
        switch(CateRefindSearch){
          case 'collapseTwoRSBibType':
            if (IndexShow>0){
              setcollapseTwoRSBibType("panel-collapse in collapse ");
            }
            else
            {
              setcollapseTwoRSBibType("panel-collapse collapse  in show ");
            }
            return '';
          case 'collapseTwoRSSubject':
            if (IndexShow>0){
            
              setcollapseTwoRSSubject("panel-collapse in collapse ");
            }
            else
            {
     
              setcollapseTwoRSSubject("panel-collapse collapse  in show ");
            }
            return '';
          case 'collapseTwoRSKeyword':
            if (IndexShow>0){

              setcollapseTwoRSKeyword("panel-collapse in collapse ");
            }
            else
            {

              setcollapseTwoRSKeyword("panel-collapse collapse  in show ");
            }
            return '';
          case 'collapseTwoRSYear':
            if (IndexShow>0){
              setcollapseTwoRSPubyear("panel-collapse in collapse ");
            }
            else
            {
              setcollapseTwoRSPubyear("panel-collapse collapse  in show ");
            }
            return '';
          case 'collapseTwoRSAuthor':
            if (IndexShow>0){
              setcollapseTwoRSAuthor("panel-collapse in collapse ");
            }
            else
            {
              setcollapseTwoRSAuthor("panel-collapse collapse  in show ");
            }
            return '';
          
        }
        // if (IndexShow>0){
        //   setcollapseTwoRSBibType("panel-collapse in collapse ");
        // }
        // else
        // {
        //   setcollapseTwoRSBibType("panel-collapse collapse  in show ");
        // }
      }
    }
      

  }

  const ClientPageNextPrev= ( CurrentPage: number , CatePage: string) => {
    if (CatePage=="next")
    {
      ClientSearchItem(CurrentPage+1,pageSize,orderby);
       //ShowMoreRefind(CateSearch,'ID',CurrentPage+1);
    }
    else if (CatePage=='pre'){
      if (CurrentPage>1)
      {
        ClientSearchItem(CurrentPage-1,pageSize,orderby);
      }
      
    }else if (CatePage=='top')
    {
      ClientSearchItem(1,pageSize,orderby);
    }
    else
    {
      //end
      ClientSearchItem(state.item.PageCount,pageSize,orderby);
    }
    
  }
  const RenderPaging = (CountPages: any, iCurrentPage: number) => {
    //setCurrentPage(CurrentPage);
    
    if (state.item.PageCount>0){
      let html:any = [];
      let iPageStart =1;
      let iPageEnd =10;
      console.log("CountPagesCountPages",CountPages);
      console.log("iCurrentPageiCurrentPageiCurrentPage",iCurrentPage);
  
      if (iCurrentPage>10){
  
      }
  
      if (iCurrentPage>9 ){
        iPageStart=iCurrentPage-5;
        iPageEnd=iCurrentPage+5;
      }
      if (iPageEnd>state.item.PageCount){
        iPageEnd=state.item.PageCount;
      }
  
      for(let i=iPageStart; i<=iPageEnd; i++)
      {
        if (i==iCurrentPage)
        {
            html.push( <li className="active" ><a style={{cursor: "pointer"}} onClick={() => ClientSearchItem(i,pageSize,orderby)}>{i}</a></li>);
        }
        else
        {
          html.push( <li ><a style={{cursor: "pointer"}} onClick={() => ClientSearchItem(i,pageSize,orderby)}>{i}</a></li>)
        }
        
      }
      return html;
    }
    return "";
  
  }

  
  return (


    <div>
      {/* <BannerDetail MethodParent={MethodParent}></BannerDetail> */}

      <section>

      

      <div>
        <div id="ImageTopBanner" className="carousel slide" data-ride="carousel"> 
          <img src={XemChiTiet} alt="" /> 
          <div className="row col-md-12" id="searchBannerSubPage">  
            <div className="container"> 
              <div className="row">
                <input type="text" id="txtKeyword" onChange={e => setKeywordQuickSearchGet(e.target.value)} 
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
                <a  onClick={()=>ClientQuickSearch(1,10,"ID",KeywordQuickSearchGet,CategoryBibGet )} id="btnSearchHome" className="form-control"><i className="fa fa-search" /></a>    
              </div> 
            </div> 
          </div> 
        </div>
      </div>
    </section>

      <section>
        <div className="containernews">
          <div className="col-sm-12">
            <div className="row divContentModuleSearch">
              <div className="col-sm-3">
                {/* <div className="panel-group" id="accordion"><div id="divIlibRefineSearch" className="panel panel-default widget-sidebar">
                                <div id="lookupGuide" className="panel-heading">
                                    <h4 className="panel-title panel-title-adjust">
                                        <a href="#collapseTwoRSBibType" data-toggle="collapse">
                                            <i className="fa fa-plus-circle" aria-hidden="true" /> Hướng dẫn tra cứu
                                        </a>
                                    </h4>
                                </div>   <div id="collapseTwoRSBibType" className="panel-collapse collapse show" aria-expanded="true">
                                    <div className="panel-body">
                                        <ul className="widget-ul">
                                            <li><strong>Tìm cơ bản:</strong> <br />
                                                B1: Chọn cơ sở dữ liệu cần tìm
                                                <br />
                                                B2: Nhập một trong các trường: tên tài liệu, Tác giả, Năm xuất bản, Từ khóa
                                            </li>
                                            <li><strong>Tìm nâng cao:</strong><br />
                                                B1: Chọn cơ sở dữ liệu cần tìm trong tab nâng cao <br />
                                                B2: Nhập thông tin cần tìm kết hợp với các toán tử AND, OR, NOT
                                            </li>
                                            <li><strong>Tìm toàn văn:</strong><br />
                                                Nhập nội dung cần tìm vào ô Nội dung tìm
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div> */}
                <section>


                  <div className="panel-group" id="accordion"><div className="panel panel-default widget-sidebar">
                    <div className="panel-heading">
                      <h4 className="panel-title panel-title-adjust">
                        <a  onClick={(e) => ShowHideRefindSeach('collapseTwoRSBibType')} data-toggle="collapse" aria-expanded="false"  >
                          <i className="fa fa-plus-circle" /> Loại tài liệu
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwoRSBibType" className={collapseTwoRSBibType} >
                            
                      <div id="divRSBibType" className="panel-body overflow-auto">
                        {
                         state.items_BibType_Search?
                          state.items_BibType_Search.Results ?
                            state.items_BibType_Search.Results.map((item: any, index: number) => {

                              return (
                                <>
                                    <p>
                                          <input type="checkbox"
                                          // onclick="javascript:ClientSearchRefineQuickSearch();"
                                          name="RSBibType" className="form-check-input" id="chkrs_rsbibtype_0" defaultValue="rsbibtype$Ảnh" />
                                          <label className="form-check-label" htmlFor="chkrs_rsbibtype_0">{item.VALUE}</label>  
                                          <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>{item.CountGroupValue}</label>
                                    </p>
                                </>
                              )
                            })
                            : ""
                            :  ""

                        }
                       

                      </div>
                    </div>
                  </div>
                    <div className="panel panel-default widget-sidebar">
                      <div className="panel-heading">
                        <h4 className="panel-title panel-title-adjust">
                          <a onClick={(e) => ShowHideRefindSeach('collapseTwoRSAuthor')}  data-toggle="collapse">
                            <i className="fa fa-plus-circle" /> Tác giả
                          </a>
                        </h4>
                      </div>
                      <div id="collapseTwoRSAuthor" className={collapseTwoRSAuthor}>
                        <div id="divRSAuthor" className="panel-body overflow-auto">

                        {
                         state.items_Authors_Search?
                          state.items_Authors_Search.Results ?
                            state.items_Authors_Search.Results.map((item: any, index: number) => {

                              return (
                                <>
                                  
                                    <p><input type="checkbox"
                                      // onclick="javascript:ClientSearchRefineQuickSearch();"
                                      name="RSAuthor" className="form-check-input" id="chkrs_rsauthor_0" defaultValue="rsauthor$Phạm Duy Quang Huy" />
                                      <label className="form-check-label" htmlFor="chkrs_rsauthor_0">{item.VALUE}</label>  
                                      <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>{item.CountGroupValue}</label>
                                    </p>

                                    
                                </>
                              )
                            })
                            : ""
                            :""

                        }
                        {
                         state.items_Authors_Search?
                            <p> <a  onClick={(e) => ShowMoreRefind(CateSearch,'author',state.items_Authors_Search.CurrentPage+1)} >Xem thêm <i className="fa fa-angle-double-right"></i></a></p>

                          :""
                        }

                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default widget-sidebar">
                      <div className="panel-heading">
                        <h4 className="panel-title panel-title-adjust">
                          <a onClick={(e) => ShowHideRefindSeach('collapseTwoRSYear')}  data-toggle="collapse">
                            <i className="fa fa-plus-circle" /> Năm xuất bản
                          </a>
                        </h4>
                      </div>
                      <div id="collapseTwoRSYear" className={collapseTwoRSPubyear}>
                        <div id="divRSYear" className="panel-body overflow-auto">
                          
                          

                          {
                         state.items_Pubyear_Search?
                          state.items_Pubyear_Search.Results ?
                            state.items_Pubyear_Search.Results.map((item: any, index: number) => {

                              return (
                                <>
                                    <p><input type="checkbox"
                                      //  onclick="javascript:ClientSearchRefineQuickSearchYear();" 
                                      name="RSYear" className="form-check-input" id="chkrs_rsyear_0" defaultValue="rsyear$25/11/2020" />
                                      <label className="form-check-label" htmlFor="chkrs_rsyear_0">{item.VALUE}</label>  
                                      <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>{item.CountGroupValue}</label>
                                    </p>
                                </>
                              )
                            })
                            : ""
                            :""

                        }
                        {
                         state.items_Pubyear_Search?
                            <p> <a  onClick={(e) => ShowMoreRefind(CateSearch,'pubyear',state.items_Pubyear_Search.CurrentPage+1)} >Xem thêm <i className="fa fa-angle-double-right"></i></a></p>

                          :""
                        }
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default widget-sidebar">
                      <div className="panel-heading">
                        <h4 className="panel-title panel-title-adjust">
                          <a onClick={(e) => ShowHideRefindSeach('collapseTwoRSKeyword')} data-toggle="collapse">
                            <i className="fa fa-plus-circle" /> Từ khóa
                          </a>
                        </h4>
                      </div>
                      <div id="collapseTwoRSKeyword" className={collapseTwoRSKeyword}>
                        <div id="divRSKeyword" className="panel-body overflow-auto">
                          
                          {
                         state.items_Keywords_Search?
                          state.items_Keywords_Search.Results ?
                            state.items_Keywords_Search.Results.map((item: any, index: number) => {

                              return (
                                <>
                                    <p><input type="checkbox"
                                      // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                      name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_0" defaultValue="rskeyword$Lần thứ 38" />
                                      <label className="form-check-label" htmlFor="chkrs_rskeyword_0">{item.VALUE}</label>  
                                      <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>{item.CountGroupValue}</label>
                                    </p>
                                </>
                              )
                            })
                            : ""
                            :""

                        }
                        {
                         state.items_Keywords_Search?
                            <p> <a  onClick={(e) => ShowMoreRefind(CateSearch,'keyword',state.items_Keywords_Search.CurrentPage+1)} >Xem thêm <i className="fa fa-angle-double-right"></i></a></p>

                          :""
                        }
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default widget-sidebar">
                      <div className="panel-heading">
                        <h4 className="panel-title panel-title-adjust">
                          <a onClick={(e) => ShowHideRefindSeach('collapseTwoRSSubject')} data-toggle="collapse">
                            <i className="fa fa-plus-circle" /> Chủ đề
                          </a>
                        </h4>
                      </div>
                      <div id="collapseTwoRSSubject" className={collapseTwoRSSubject}>
                        <div id="divRSSubject" className="overflow-auto">
                        {
                         state.items_Subject_Search?
                          state.items_Subject_Search.Results ?
                            state.items_Subject_Search.Results.map((item: any, index: number) => {

                              return (
                                <>
                                 

                                    <p><input type="checkbox"
                                      // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                      name="RSSubject" className="form-check-input" id="chkrs_rssubject_0" defaultValue="rssubject$Lần thứ 38" />
                                      <label className="form-check-label" htmlFor="chkrs_rssubject_0">{item.VALUE}</label>  
                                      <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>{item.CountGroupValue}</label>
                                    </p>
                                </>
                              )
                            })
                            : ""
                            :""

                        }
                        {
                         state.items_Subject_Search?
                            <p> <a  onClick={(e) => ShowMoreRefind(CateSearch,'Subject',state.items_Subject_Search.CurrentPage+1)} >Xem thêm <i className="fa fa-angle-double-right"></i></a></p>

                          :""
                        }
                        </div>
                      </div>
                    </div>
                  </div>

                </section>


              </div>
              <div className="col-sm-9">
                <div className="row">
                  {/* <div id="divTabsContainer" className="tabbable row">
                                    <ul className="nav nav-tabs" id="TabSearch" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active" id="basic-tab" data-toggle="tab" href="#frmSearchBasic" role="tab" aria-controls="basic" aria-selected="true">CƠ BẢN</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="advance-tab" data-toggle="tab" href="#frmSearchAdvance" role="tab" aria-controls="advance" aria-selected="false">NÂNG CAO</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="FindFile-tab" data-toggle="tab" href="#frmSearchFindFile" role="tab" aria-controls="FindFile" aria-selected="false">TOÀN VĂN</a>
                                        </li>
                                    </ul>
                                </div> */}
                  <div  >
                    <input id="txtMaxSearchFieldform-basic" type="hidden" defaultValue={6} />
                    <input id="hdTextSearchValue" type="hidden" />
                    <div style={{ padding: '10px 0 50px 0', textAlign: 'center', display: 'none' }}>
                      <a className="btn btn-default nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">TÌM KIẾM CƠ BẢN</a>
                      <a className="btn btn-default nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">TÌM KIẾM NÂNG CAO</a>
                    </div>
                    <Tabs
                      defaultActiveKey="home"
                      id="uncontrolled-tab-example"
                      className="divTabsContainerFormSearch"
                    >
                      <Tab eventKey="home" title="CƠ BẢN111">
                        <div className="col-sm-12">
                          <div className="row">
                            <div className="col-sm-9">
                              <div className="card cardPadding mb-4 shadow-sm">
                                <select className="span12 form-control" id="txtSearchValueform-basic6" onChange={e => setCategoryBibGet(e.target.value)}>
                                  <option value="">--- Chọn cơ sở dữ liệu ---</option>
                                  <option value={9}>Ảnh</option>
                                  <option value={15}>BST Khác</option>
                                  <option value={12}>BST Tạp chí nước ngoài</option>
                                  <option value={10}>BST Tạp chí trong nước</option>
                                  <option value={16}>Đào tạo</option>
                                  <option value={2}>Đề tài NCKH</option>
                                  <option value={5}>Dự án điện</option>
                                  <option value={13}>Hội thảo, kỷ yếu, tài liệu</option>
                                  <option value={1}>Sách</option>
                                  <option value={14}>Sáng kiến
                                  </option>
                                  <option value={8}>Tạp chí nước ngoài</option>
                                  <option value={7}>Tạp chí trong nước</option>
                                  <option value={4}>TCVN</option>
                                  <option value={3}>Tiêu chuẩn kỹ thuật điện</option>
                                  <option value={6}>Video</option>
                                </select>
                                <input id="txtSearchFieldform-basic6" type="hidden" defaultValue="bibtypeid" />
                                <input id="txtSearchTypeform-basic6" type="hidden" defaultValue={1} />
                                <input id="txtTypeFieldform-basic6" type="hidden" defaultValue="listbox" />
                                <input id="txtOperatorform-basic6" type="hidden" defaultValue="and" />
                              </div>
                            </div>
                            <div className="col-sm-3" style={{ marginTop: '15px' }}>
                              Tìm không dấu: <input type="checkbox" id="chkunsignedform-basic7" onChange={e => setUnsignedGet(e.target.checked)} name="checkbox-1" className="checkbox" title="Tìm không dấu" />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="card cardPadding mb-4 shadow-sm">
                                <input id="txtSearchValueform-basic1" type="text" className="form-control" onChange={e => setTitleGet(e.target.value)} placeholder="Nhan đề" aria-label="Default" aria-describedby="inputGroup-sizing-default" />       <input id="txtSearchFieldform-basic1" type="hidden" defaultValue="title" />
                                <input id="txtSearchTypeform-basic1" type="hidden" defaultValue={1} />
                                <input id="txtTypeFieldform-basic1" type="hidden" defaultValue="TextBox" />
                                <input id="txtOperatorform-basic1" type="hidden" defaultValue="and" />
                                <input type="checkbox" className="eye" id="chkExactlyform-basic1" aria-label="Default" onChange={e => setTitleExactlyGet(e.target.checked)} title="Tìm chính xác" defaultValue="Chính xác" aria-describedby="inputGroup-sizing-default" /></div>
                            </div>
                            <div className="col-sm-6">
                              <div className="card cardPadding mb-4 shadow-sm">
                                <input type="text" id="txtSearchValueform-basic2" className="form-control" onChange={e => setAuthorGet(e.target.value)} placeholder="Tác giả" aria-label="Default" aria-describedby="inputGroup-sizing-default" />       <input id="txtSearchFieldform-basic2" type="hidden" defaultValue="author" />
                                <input id="txtSearchTypeform-basic2" type="hidden" defaultValue={1} />
                                <input id="txtTypeFieldform-basic2" type="hidden" defaultValue="TextBox" />
                                <input id="txtOperatorform-basic2" type="hidden" defaultValue="and" />
                                <input id="chkExactlyform-basic2" type="checkbox" className="eye" aria-label="Default" onChange={e => setAuthorExactlyGet(e.target.checked)} title="Tìm chính xác" defaultValue="Chính xác" aria-describedby="inputGroup-sizing-default" /></div>
                            </div>
                            <div className="col-sm-6">
                              <div className="card cardPadding mb-4 shadow-sm">
                                <input id="txtSearchValueform-basic3" type="text" className="form-control" onChange={e => setKeywordGet(e.target.value)} placeholder="Từ khóa" aria-label="Default" aria-describedby="inputGroup-sizing-default" />       <input id="txtSearchFieldform-basic3" type="hidden" defaultValue="keyword" />
                                <input id="txtSearchTypeform-basic3" type="hidden" defaultValue={1} />
                                <input id="txtTypeFieldform-basic3" type="hidden" defaultValue="TextBox" />
                                <input id="txtOperatorform-basic3" type="hidden" defaultValue="and" />
                                <input id="chkExactlyform-basic3" type="checkbox" className="eye" aria-label="Default" onChange={e => setKeywordExactlyGet(e.target.checked)} title="Tìm chính xác" defaultValue="Chính xác" aria-describedby="inputGroup-sizing-default" /></div>
                            </div>
                            <div className="col-sm-6">
                              <div className="card cardPadding mb-4 shadow-sm">
                                <input id="txtSearchValueform-basic4" type="text" className="form-control" placeholder="Chủ đề" onChange={e => setSubjectGet(e.target.value)} aria-label="Default" aria-describedby="inputGroup-sizing-default" />       <input id="txtSearchFieldform-basic4" type="hidden" defaultValue="subject" />
                                <input id="txtSearchTypeform-basic4" type="hidden" defaultValue={1} />
                                <input id="txtTypeFieldform-basic4" type="hidden" defaultValue="TextBox" />
                                <input id="txtOperatorform-basic4" type="hidden" defaultValue="and" />
                                <input id="chkExactlyform-basic4" type="checkbox" className="eye" aria-label="Default" title="Tìm chính xác" onChange={e => setSubjectExactlyGet(e.target.checked)} defaultValue="Chính xác" aria-describedby="inputGroup-sizing-default" /></div>
                            </div>
                            <div className="col-sm-6">
                              <div className="card  cardPadding mb-4 shadow-sm">
                                <input id="txtSearchValueform-basic5" type="text" className="form-control" placeholder="Năm xuất bản " onChange={e => setYearPubGet(e.target.value)} aria-label="Default" aria-describedby="inputGroup-sizing-default" />       <input id="txtSearchFieldform-basic5" type="hidden" defaultValue="yearpub" />
                                <input id="txtSearchTypeform-basic5" type="hidden" defaultValue={1} />
                                <input id="txtTypeFieldform-basic5" type="hidden" defaultValue="TextBox" />
                                <input id="txtOperatorform-basic5" type="hidden" defaultValue="and" />
                                <input id="chkExactlyform-basic5" type="checkbox" className="eye" aria-label="Default" title="Tìm chính xác" onChange={e => setYearPubExactlyGet(e.target.checked)} defaultValue="Chính xác" aria-describedby="inputGroup-sizing-default" />   </div>
                            </div>
                            <div className="col-sm-6 row">
                              <div className="col-sm-5">
                                <div className="form-submit  ">
                                  <button type="submit"
                                    onClick={() => ClientSearchItem(1,10,"ID")}
                                    className="awe-btn btn-sm awe-search"><i className="fa fa-search" aria-hidden="true" /> Tìm kiếm</button>
                                </div>
                              </div>
                              <div className="col-sm-5">
                                <div className="form-submit  ">
                                  <button type="submit"
                                    // onclick="javascript:ClientResetBasicSearch();"
                                    className="awe-btn btn-sm"><i className="fa fa-refresh" aria-hidden="true" /> Làm lại</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="profile" title="NÂNG CAO">
                        <div className="col-sm-12">
                          <div className="row">
                            <div className="col-sm-9">
                              <div style={{ margin: '10px' }}>
                                <select className="span12 form-control" id="txtSearchValueform-advance1">
                                  <option value="">--- Chọn cơ sở dữ liệu ---</option>
                                  <option value={9}>Ảnh</option>
                                  <option value={15}>BST Khác</option>
                                  <option value={12}>BST Tạp chí nước ngoài</option>
                                  <option value={10}>BST Tạp chí trong nước</option>
                                  <option value={16}>Đào tạo</option>
                                  <option value={2}>Đề tài NCKH</option>
                                  <option value={5}>Dự án điện</option>
                                  <option value={13}>Hội thảo, kỷ yếu, tài liệu</option>
                                  <option value={1}>Sách</option>
                                  <option value={14}>Sáng kiến
                                  </option>
                                  <option value={8}>Tạp chí nước ngoài</option>
                                  <option value={7}>Tạp chí trong nước</option>
                                  <option value={4}>TCVN</option>
                                  <option value={3}>Tiêu chuẩn kỹ thuật điện</option>
                                  <option value={6}>Video</option>
                                </select>
                                <input id="txtSearchFieldform-advance1" type="hidden" defaultValue="bibtypeid" />
                                <input id="txtSearchTypeform-advance1" type="hidden" defaultValue={1} />
                                <input id="txtTypeFieldform-advance1" type="hidden" defaultValue="listbox" />
                                <input id="txtOperatorform-advance1" type="hidden" defaultValue="and" />
                              </div>
                            </div>
                            <div className="col-sm-3" style={{ marginTop: '20px' }}> Tìm không dấu: <input type="checkbox" id="chkunsignedform-advance7" name="checkbox-1" className="checkbox" title="Tìm không dấu" /> </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-search row">
                                <div className="form-field field-select col-sm-2">
                                  <div className="select">
                                    <div className="select">
                                      <span className="spanAll">Tất cả</span>

                                      <select id="cbSearchValueform-advance4">
                                        <option value="" selected>Tất cả</option>
                                        <option value="title">Nhan đề</option>
                                        <option value="author">Tác giả</option>
                                        <option value="subject">Chủ đề</option>
                                        <option value="keyword"> Từ khóa </option>
                                        <option value="yearpub">Năm xuất bản</option>
                                      </select>
                                    </div>
                                    <input id="cbSearchFieldform-advance4" type="hidden" defaultValue="all" />
                                    <input id="cbSearchTypeform-advance4" type="hidden" defaultValue={1} />
                                    <input id="cbTypeFieldform-advance4" type="hidden" defaultValue="sfieldsearch" />
                                  </div>
                                </div>
                                <div className="form-field col-sm-8">
                                  <label><span /></label>
                                  <input type="text" className="field-input" id="txtSearchValueform-advance4" />
                                  <input id="txtSearchFieldform-advance4" type="hidden" defaultValue="all" />
                                  <input id="txtSearchTypeform-advance4" type="hidden" defaultValue={1} />
                                  <input id="txtTypeFieldform-advance4" type="hidden" defaultValue="sfieldsearch" />
                                  <input id="txtOperatorform-advance4" type="hidden" defaultValue="and" />
                                </div>
                                <div className="form-field field-select col-sm-2">
                                  <div className="select">
                                    <span className="spanAnd">And</span>
                                    <select id="txtSearchConditionValueform-advance4">
                                      <option value="and">And </option>
                                      <option value="or">Or</option>
                                      <option value="not">Not</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="form-search row">
                                <div className="form-field field-select col-sm-2">
                                  <div className="select">
                                    <div className="select">
                                      <span className="spanAll">Tất cả</span>
                                      <select id="cbSearchValueform-advance5">
                                        <option value="" selected>Tất cả</option>
                                        <option value="title">Nhan đề</option>
                                        <option value="author">Tác giả</option>
                                        <option value="subject">Chủ đề</option>
                                        <option value="keyword"> Từ khóa </option>
                                        <option value="yearpub">Năm xuất bản</option>
                                      </select>
                                    </div>
                                    <input id="cbSearchFieldform-advance5" type="hidden" defaultValue="all" />
                                    <input id="cbSearchTypeform-advance5" type="hidden" defaultValue={1} />
                                    <input id="cbTypeFieldform-advance5" type="hidden" defaultValue="sfieldsearch" />
                                  </div>
                                </div>
                                <div className="form-field col-sm-8">
                                  <label><span /></label>
                                  <input type="text" className="field-input" id="txtSearchValueform-advance5" />
                                  <input id="txtSearchFieldform-advance5" type="hidden" defaultValue="all" />
                                  <input id="txtSearchTypeform-advance5" type="hidden" defaultValue={1} />
                                  <input id="txtTypeFieldform-advance5" type="hidden" defaultValue="sfieldsearch" />
                                  <input id="txtOperatorform-advance5" type="hidden" defaultValue="and" />
                                </div>
                                <div className="form-field field-select col-sm-2">
                                  <div className="select">
                                    <span className="spanAnd">And</span>
                                    <select id="txtSearchConditionValueform-advance5">
                                      <option value="and">And </option>
                                      <option value="or">Or</option>
                                      <option value="not">Not</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="form-search row">
                                <div className="form-field field-select col-sm-2">
                                  <div className="select">
                                    <div className="select">
                                      <span className="spanAll">Tất cả</span>
                                      <select id="cbSearchValueform-advance6">
                                        <option value="" selected>Tất cả</option>
                                        <option value="title">Nhan đề</option>
                                        <option value="author">Tác giả</option>
                                        <option value="subject">Chủ đề</option>
                                        <option value="keyword"> Từ khóa </option>
                                        <option value="yearpub">Năm xuất bản</option>
                                      </select>
                                    </div>
                                    <input id="cbSearchFieldform-advance6" type="hidden" defaultValue="all" />
                                    <input id="cbSearchTypeform-advance6" type="hidden" defaultValue={1} />
                                    <input id="cbTypeFieldform-advance6" type="hidden" defaultValue="sfieldsearch" />
                                  </div>
                                </div>
                                <div className="form-field col-sm-8">
                                  <label><span /></label>
                                  <input type="text" className="field-input" id="txtSearchValueform-advance6" />
                                  <input id="txtSearchFieldform-advance6" type="hidden" defaultValue="all" />
                                  <input id="txtSearchTypeform-advance6" type="hidden" defaultValue={1} />
                                  <input id="txtTypeFieldform-advance6" type="hidden" defaultValue="sfieldsearch" />
                                  <input id="txtOperatorform-advance6" type="hidden" defaultValue="and" />
                                </div>
                                <div className="form-field field-select col-sm-2">
                                  <div className="select">
                                    <span className="spanAnd">And</span>
                                    <select id="txtSearchConditionValueform-advance6">
                                      <option value="and">And </option>
                                      <option value="or">Or</option>
                                      <option value="not">Not</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="form-search row">
                                <div className="form-submit  col-sm-2">
                                  <button type="submit"
                                    // onclick="javascript:ClientAdvanceSearch();"
                                    className="awe-btn btn-sm awe-search"><i className="fa fa-search" /> Tìm kiếm</button>		<input id="txtSearchFieldform-advance7" type="hidden" defaultValue="keyword" />
                                  <input id="txtSearchTypeform-advance7" type="hidden" defaultValue={1} />
                                  <input id="txtMaxSearchFieldform-advance" type="hidden" defaultValue={7} />
                                  <input id="txtOperatorform-advance7" type="hidden" defaultValue="and" />
                                  <input id="txtTypeFieldform-advance7" type="hidden" defaultValue="Button" />
                                </div>
                                <div className="form-submit  col-sm-2">
                                  <button type="submit"
                                    // onclick="javascript:ClientResetAdvanceSearch();" 
                                    className="awe-btn btn-sm"><i className="fa fa-refresh" /> Làm lại</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="contact" title="TOÀN VĂN">
                        <div className="col-md-12">
                          <div className=" row">
                            <div className="  col-md-4">
                              <select className="span12 form-control" id="selBibTypeFulltext">
                                <option value="">--- Chọn cơ sở dữ liệu ---</option>
                                <option value={9}>Ảnh</option>
                                <option value={15}>BST Khác</option>
                                <option value={12}>BST Tạp chí nước ngoài</option>
                                <option value={10}>BST Tạp chí trong nước</option>
                                <option value={16}>Đào tạo</option>
                                <option value={2}>Đề tài NCKH</option>
                                <option value={5}>Dự án điện</option>
                                <option value={13}>Hội thảo, kỷ yếu, tài liệu</option>
                                <option value={1}>Sách</option>
                                <option value={14}>Sáng kiến
                                </option>
                                <option value={8}>Tạp chí nước ngoài</option>
                                <option value={7}>Tạp chí trong nước</option>
                                <option value={4}>TCVN</option>
                                <option value={3}>Tiêu chuẩn kỹ thuật điện</option>
                                <option value={6}>Video</option>
                              </select>
                            </div>
                            <div className=" col-md-5">
                              <label><span /></label>
                              <input type="text" className="field-input" placeholder="Nội dung tìm kiếm" id="txtKeywordFulltext" />
                            </div>
                            <div className=" col-md-3 row">
                              <div className="form-submit  ">
                                <button type="submit"
                                  // onclick="javascript:ClientFullTextSearch();"
                                  className="awe-btn btn-sm awe-search"><i className="fa fa-search" /> Tìm kiếm</button>		<input id="txtkeywordFullTextSearch" type="hidden" defaultValue="keyword" />
                              </div>
                              <div className="form-submit  ">
                                <button type="submit"
                                  // onclick="javascript:ClientResetFullTextSearch();"
                                  className="awe-btn btn-sm"><i className="fa fa-refresh" /> Làm lại</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>

                  </div>
                </div>
                <div className="col-sm-12">
                  <div id="divSearchUtility" style={{}}>
                    <div id="divSearchInfo" className="search-result alert alert-info" style={{ display: 'none' }}><div className="text-center"><i className="fa fa-spinner fa-spin" /></div></div>
                   

                    <div id="divSearchUtility" style={{}}>
                      <div id="divSearchInfo" className="search-result alert alert-info" style={{}}><p>Tìm thấy <ins>{state.item.RowCount}</ins> <span>Kết quả</span></p></div>
                      <div id="divSearchFilter" className="sort-view clearfix" style={{}}>   <div>
                        {/* checkbox */}
                        <div className="radio-checkbox pull-left">
                          <input type="checkbox" name="checkbox-all"
                            //   onclick="javascript:ClientCheckAllBib();"
                            id="checkbox-all" className="checkbox" /><label htmlFor="checkbox-all" />
                        </div>
                        {/* checkbox */}
                        {/* sort */}
                        <div className="sort-by">
                          <div className="pull-left"><span className="pull-left">Sắp xếp</span>
                            <select name="start" id="cbFilterField" className="form-control pull-left opacselect"
                            // onchange="javascript:ClientFieldSortOnchange('cms', this);"
                            onChange={e =>  ClientSearchItem_Sort(1, 10, e.target.value)}
                            >
                              <option value="">--- Chọn ---</option>
                              <option selected value="newbib_dsc">Thích hợp</option>
                              <option value="Title_asc">Tài liệu (A-Z)</option>
                              <option value="year_asc">Xuất bản tăng dần</option>
                              <option value="year_dsc">Xuất bản giảm dần</option>
                            </select>
                            <span className="pull-left">Hiển thị: </span>
                            <select name="start" style={{ width: '20%' }} id="cbRecordPage" className="form-control pull-left opacselect"
                            // onchange="javascript:ClientRecordPageOnchange('cms', this);"
                            onChange={e =>  ClientSearchItem_Sort(1, parseInt(e.target.value),"ID")}
                            >
                              <option selected value={10}>10</option>
                              <option value={50}>50</option>
                              <option value={100}>100</option>
                              <option value={200}>200</option>
                            </select>
                          </div>
                          <div className="pull-right">
                            
                            <div id="divPagination" className="tool-bar"><ul className="pagination pagination-sm cusPagination">
                              <li><a  onClick={() => ClientPageNextPrev(CurrentPage,"top")}> <i className="fa fa-angle-double-left" /></a></li>
                              <li><a onClick={() => ClientPageNextPrev(CurrentPage,"pre")} ><i className="fa fa-angle-left" /></a></li>
                              
                              {RenderPaging(state.item.PageCount,state.item.CurrentPage)}
                              

                              <li><a onClick={() => ClientPageNextPrev(CurrentPage,"next")}><i className="fa fa-angle-right" /></a></li>
                              <li><a onClick={() => ClientPageNextPrev(CurrentPage,"end")}><i className="fa fa-angle-double-right" /></a></li>
                              </ul>
                            </div>   <div id="divUtility" className="tool-bar navbar-right"><a href="javascript:ClientExportBib('cms', 'excel');" className="btn btn-default btn-sm" title="Chọn in ấn phẩm"><i className="fa fa-print" /></a>
                            </div>

                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      </div>

                      {/* Chi tiết biểu ghi */}
                      <ul id="ulSearchResult" className="media-list result-list">


                        {/* For ở đây */}

                        {

                          state.item.Results ?
                            // <div className="sssssssssssssslnhai">{state.item.Results[1].ID}</div>
                            // :""
                            state.item.Results.map((item: any, index: number) => {

                              return (
                                <>
                                  {/* <div className="sssssssssssssslnhai123333">{item.ID}</div> */}
                                  <li className="media">
                                    <div className="divDetailBibiSearch">
                                      <div className="radio-checkbox pull-left"><input type="checkbox" className="checkbox"
                                        //    onclick="ClientBibCheckBox('143562');"
                                        name="checkbox-bib" /> <label />  <span style={{ fontWeight: 900 }}>{index + 1}.</span>
                                      </div>
                                      <div className="media-body">
                                        <h4 className="media-heading">
                                          <a href="../cms/viewdetail-lanh-dao-dang-uy-khoi-doanh-nghiep-ha-noi-tham-du-hoi-nghi-cong-bo-quyet-dinh-chuyen-giao--tiep-nhan-dang-bo-tong-cong-ty-dien-luc-mien-bac-tu-truc-thuoc-dang-bo-khoi-doanh-nghiep-ha-noi-ve-truc-thuoc-dang-bo-tap-doan-dien-luc-viet-nam-(thuoc-dang-bo-khoi-doanh-nghiep-trung-uong)-id-143562.html" target="_blank">{item.TITLE}</a>
                                          <input type="hidden" id="hdBibId" defaultValue={143562} />
                                          <input type="hidden" id="hdDbBibTitle143562" defaultValue={item.TITLE} />
                                          <input type="hidden" id="hdDbSource" defaultValue="DLIB" />
                                        </h4>
                                      </div>
                                      <div className="tabbable panel panel-default" id="tabs-202996">
                                        {/* tab */}
                                        {/* tab */}
                                        {/* content panel body*/}
                                        <div className="tab-content-result panel-body">
                                          {/* tab content */}
                                          <div className="tab-pane active" id="panel-intro143562">
                                            <dl id="divBibInfo143562" style={{ display: 'none' }} className="doc-dl">
                                            </dl>
                                            <div id="divBibDetail143562" className="media doc-details">
                                              <div id="divBibDetail143562" className="media doc-details">
                                                <div className="media-left">
                                                  <a href="#"><img alt="..." src="http://113.160.187.1:82/pages/opac/images/no-thumb/nothumb.jpg" className="media-object" /></a>
                                                </div>
                                                <div className="media-body">
                                                  <dl>
                                                    <dd> <dl >
                                                      <dd style={{ width: '30%', float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }}><strong>Tác giả:</strong></dd>
                                                      <dd style={{ width: '70%', float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>{item.AUTHOR}
                                                      </dd>
                                                    </dl> </dd>
                                                    <dd> <dl >
                                                      <dd style={{ width: '30%', float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }}><strong>Năm xuất bản:</strong></dd>
                                                      <dd style={{ width: '70%', float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>{item.YEAR_PUB}</dd>
                                                    </dl> </dd>
                                                    <dd> <dl >
                                                      <dd style={{ width: '30%', float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }}><strong>Tóm tắt:</strong></dd>
                                                      <dd style={{ width: '70%', float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>{item.SUMMARY}</dd>
                                                    </dl> </dd>

                                                  </dl>
                                                </div>
                                                <div className="media-right">
                                                  <img alt="" src="http://113.160.187.1:82/pages/opac/TempDir/qrcode/ILIB/1/75565.jpg" className="qr" />
                                                </div>
                                              </div>
                                            </div>
                                            <div id="divBibDetailView143562" className="table-wrap" style={{ display: 'none' }} />
                                            <div id="divBibDigitalInfo143562" className="table-wrap" style={{ display: 'none' }} />
                                            <div>
                                              <a id="aBibDetail143562" style={{ display: 'none' }} className="btn btn-default btn-xs" href="javascript:ClientViewBibDetailV2('cms', '143562', '0');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
                                              <a id="aBibInfo143562" className="btn btn-default btn-xs" style={{ display: 'none' }} href="javascript:ClientBackToBibInfo('cms', '143562', '143562');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
                                              <div className="pull-right">
                                                <ul className="list-inline tile" id="divCollection" style={{ display: 'none' }}>
                                                  <li data-toggle="tooltip" data-placement="top" className="dropdown" style={{}} data-original-title >
                                                    <a href="#" data-toggle="modal" data-target="#login" aria-expanded="false"> <span>Cho vào BST</span> <i className="fa fa-caret-down" /></a>
                                                  </li>
                                                </ul><ul className="list-inline tile">
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* tab content */}
                                        <div className="tab-pane" id="panel-shelf143562" />
                                        {/* tab content */}
                                        <div className="tab-pane" id="panel-link143562" />
                                        {/* tab content */}
                                        <div className="tab-pane" id="panel-docsource143562" />
                                        {/* tab content */}
                                        <div className="tab-pane" id="panel-digital143562" />
                                        {/* tab content */}
                                        <div className="tab-pane" id="panel-comment143562" />
                                        {/* tab content */}
                                        <div className="tab-pane" id="panel-search143562" />
                                      </div>
                                    </div>
                                    {/* content panel body */}
                                  </li>
                                </>
                              )
                            })
                            : ""


                        }





                        <input type="hidden" id="hdStrBib" name="hdStrBib" defaultValue="143562,143563,143564,143565,143566,143567,143568,143569,143570,143571" />
                      </ul>
                      <div id="divSearchFilterBottom" className="tool-bar">   <div>
                        {/* checkbox */}
                        {/* sort */}
                        <div className="sort-by">
                          <div className="pull-right">
                            <div id="divPaginationBottom" className="tool-bar"><ul className="pagination pagination-sm cusPagination"><li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|', '5378','10','10','0','10','ClientPagingOnChange');"> <i className="fa fa-angle-double-left" /></a></li>
                              <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','0','10','ClientPagingOnChange');"><i className="fa fa-angle-left" /></a></li>
                              
                              {RenderPaging(state.item.PageCount,state.item.CurrentPage)}
                              <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','2','10','ClientPagingOnChange');"><i className="fa fa-angle-right" /></a></li><li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','537','10','ClientPagingOnChange');"><i className="fa fa-angle-double-right" /></a></li></ul></div>   <div id="divUtilityBottom" className="tool-bar navbar-right">
                              <a href="javascript:ClientExportBib('cms', 'excel');" className="btn btn-default btn-sm" title="Chọn in ấn phẩm"><i className="fa fa-print" /></a>
                            </div>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      </div>
                    </div>
                    <ul id="ulSearchResult" className="media-list result-list"></ul>
                    <div id="divSearchFilterBottom" className="tool-bar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  )
}
export default FromSearch
