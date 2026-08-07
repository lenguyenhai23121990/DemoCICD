import React, { useReducer, useEffect, useState } from 'react';
import { initState, initValues } from './InitState';
import { ActionCreators, reducer } from './Reducer';
import ENV from "services";
interface State {

}
type Props = State
const CategoryImages = (props: Props) => {


  const [state, dispatch] = useReducer(reducer, initState);
  const [pageSize, setpageSize] = React.useState(16);
  const [CurrentPage, setCurrentPage] = React.useState(1);
  const [CategotyID, setCategotyID] = React.useState(0);
  useEffect(() => {
    let IDCate = window.location.href.split('/')[window.location.href.split('/').length - 1]
    console.log("9999999999999video", IDCate);
    let iID = 1;
    try {
      iID = Number(IDCate);
      setCategotyID(iID);
    } catch { }

    var model = {
      Id: iID,
      Page: CurrentPage,
      PageSize: pageSize,
      VideoType: "2"
    }
    ActionCreators.ListCateNews(dispatch,"4");
    ActionCreators.ListVideoByCategoryID(dispatch, model);
  }, [])
  const ClientSearchItem_Sort_Paging = (page: number, pageSize: number) => {
    var model = {
      Id: CategotyID,
      Page: page,
      PageSize: pageSize,
      VideoType: "2"
    }
    ActionCreators.ListVideoByCategoryID(dispatch, model);
  }
  const RenderPaging = (CountPages: any, iCurrentPage: number) => {
    //setCurrentPage(CurrentPage);

    if (state.item_ListVideoByCategoryID.PageCount > 0) {
      let html: any = [];
      let iPageStart = 1;
      let iPageEnd = 10;
      if (iCurrentPage > 10) {

      }

      if (iCurrentPage > 9) {
        iPageStart = iCurrentPage - 5;
        iPageEnd = iCurrentPage + 5;
      }
      if (iPageEnd > state.item_ListVideoByCategoryID.PageCount) {
        iPageEnd = state.item_ListVideoByCategoryID.PageCount;
      }
      {/* <li className="page-item active"><a className="page-link" href="javascript:ClientJumpPageNewsCategory('cms','3','1793','15','10','0','10','ClientJumpPageNewsCategory');">1</a></li>
          <li className="page-item"><a className="page-link" href="javascript:ClientJumpPageNewsCategory('cms','3','1793','15','10','1','10','ClientJumpPageNewsCategory');">2</a></li> */}
      for (let i = iPageStart; i <= iPageEnd; i++) {
        if (i == iCurrentPage) {
          html.push(<li className="page-item active" ><a className="page-link" style={{ cursor: "pointer" }} onClick={() => ClientSearchItem_Sort_Paging(i, pageSize)}>{i}</a></li>);
        }
        else {
          html.push(<li className="page-item" ><a className="page-link" style={{ cursor: "pointer" }} onClick={() => ClientSearchItem_Sort_Paging(i, pageSize)}>{i}</a></li>)
        }

      }
      return html;
    }
    return "";

  }



  { console.log("statesisiisdsVideo", state) }
  return (
    <section>
      <div className="containernews">
        <div className="col-sm-12">
          <div><input type="hidden" defaultValue={3} id="hdCatId" /></div>
          <div className="row divNewsCate">
            <div className="button buttonCateNews col-md-12 col-sm-12 col-12 ">
              {
                state.item ?
                  state.item.Results ?
                    state.item.Results.map((item: any, index: number) => {
                      return (
                        <>
                          <a style={{ backgroundColor: CategotyID==item.Id? '#FF5E14': '' }}  href={"../CategoryImage/"+item.Title_Format_Url +'/'+item.Id }  className="btn">{item.Title}</a>
                          {/* <a className="btn "  href="Category-tin-trong-nuoc-id-3.html">Tin trong nước</a> */}
                        </>
                      )
                    })
                    : <></>
                  : <></>
              }
            </div>
          </div>
          <div id="divArticleList" className="row">


            {
              state.item_ListVideoByCategoryID ?
                state.item_ListVideoByCategoryID.Results ?
                  state.item_ListVideoByCategoryID.Results.map((item: any, index: number) => {
                    return (
                      <>
                        <div id="divCategoryNews" className="col-sm-3 col-12">
                          <div className="card mb-4 shadow-sm">
                            <a href={"../DetailImage/"+item.Title_Format_Url +'/'+item.Id }><img alt="" className="card-img-top" style={{ height: '170px', width: '100%', display: 'block' }} src={ENV.URL_Nginx+item.Avatar} /></a>
                            <div className="card-title">
                              <h4>
                                <a href={"../DetailImage/"+item.Title_Format_Url +'/'+item.Id } className="card-text">{item.Title}</a>
                              </h4>
                            </div>
                            <div className="card-body">
                              <p className="card-text">{item.Description}</p>
                            </div>
                            <div className="DateNewsBottom d-flex justify-content-between align-items-center">
                              <span className="date text-muted fas fa-calendar-alt"> {item.Created_Date_Format} </span>
                              <div className="btn-group">
                                <a href={"../DetailImage/"+item.Title_Format_Url +'/'+item.Id } style={{ float: 'right' }}  >Chi tiết</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                  : <></>
                : <></>

            }



            <div className=" divPagingNewsCategory col-sm-12">
              <ul className="pagination justify-content-center pagination-sm">

                {
                  state.item_ListVideoByCategoryID ?
                    state.item_ListVideoByCategoryID.Results ?
                          RenderPaging(state.item_ListVideoByCategoryID.PageCount, state.item_ListVideoByCategoryID.CurrentPage)
                      : <></>
                    : <></>

                }

              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12" style={{ display: 'none' }} id="maincollCheckLoad"> <div> 123456789123456789 </div> </div>
        <div className="col-sm-12" style={{ display: 'none' }} id="maincollCheckLoad1"> <div> 123456789123456789 </div> </div>
        <div className="col-sm-12" style={{ display: 'none' }} id="maincollCheckLoad2"> <div> 123456789123456789 </div> </div>
        <div className="col-sm-12" style={{ display: 'none' }} id="maincollCheckLoad3"> <div> 123456789123456789 </div> </div>
        <div className="col-sm-12" style={{ display: 'none' }} id="maincollCheckLoad4"> <div> 123456789123456789 </div> </div>
        <div className="col-sm-12" style={{ display: 'none' }} id="maincollCheckLoad5"> <div> 123456789123456789 </div> </div>

      </div>
    </section>
  )
}
export default CategoryImages
