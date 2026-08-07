
import React, { useReducer, useEffect, useState,Fragment } from 'react';
import { initState, initValues } from './InitState';
import { ActionCreators, reducer } from './Reducer';
import ENV from "services";
const HtmlToReactParser = require("html-to-react").Parser;
const htmlToReactParser = new HtmlToReactParser();
interface State {

}
type Props = State
const DetailImage = (props: Props) => {


  const [state, dispatch] = useReducer(reducer, initState)
  useEffect(() => {
    let ID = window.location.href.split('/')[window.location.href.split('/').length - 1]
    console.log("9999999999999", ID);
    let iID = 0;
    try {
      iID = Number(ID);
    } catch { }

    ActionCreators.DetailVideoByID(dispatch, iID);
    //ActionCreators.NewsOtherByID(dispatch, iID);
  }, [])

 
  {console.log("111111111111 DetailVideo",state)}
  return (
    state.item_DetailVideo ?
      <>
        <section>
          <div className="containernews">
            <div className="col-sm-12">
              <div className="col-md-12 col-12">
                <div className="articleDetails">
                  <h4 className="articleTitle">{state.item_DetailVideo.Results[0].Title}</h4>
                  <span className="date text-muted "> <i className="fas fa-calendar-alt" /> {state.item_DetailVideo.Results[0].Created_Date_Format} </span>
                  <p>
                  {state.item_DetailVideo.Results[0].Description}
                  </p>
                  <hr id="hrcolorDetail" />
                  <div>
                  <img alt="" className="card-img-top" style={{ height: '100%', width: '100%', display: 'block' }} src={ENV.URL_Nginx+state.item_DetailVideo.Results[0].VideoCode} />

                  
                     
                  </div>
                  {/* <p className="pAuthor" style={{ textAlign: 'right' }}>
                  </p>
                  <p className="pSource" style={{ textAlign: 'right' }}>
                  </p> */}
                  <div className="detailstool smalltext no-mobile right">
                    <a href="javascript:window.history.go(-1);" className="back"><i className="glyphicon glyphicon-arrow-left" />
                      Về trang trước</a>
                    <a href="javascript:window.scrollTo(0,0);" className="gotop"><i className="glyphicon glyphicon-arrow-up" /> Lên đầu trang</a>
                    <a href="javascript:window.print();" className="gotop"><i className="glyphicon glyphicon-print" /> In bài viết</a>
                  </div>
                </div>
              </div>
              <div className="row NewsOtherNewsDetail col-md-12 col-12">

                {/* {
                  state.item_NewsOtherByID ?
                    state.item_NewsOtherByID.Results.map((item: any, index: number) => {
                      console.log("item_NewsOtherByID", state.item_NewsOtherByID)
                      return (
                        <>
                          <div className="col-sm-3 col-12" id="divCategoryNews">
                            <div className="card mb-4 shadow-sm">
                              <a href={"../DetailNews/"+item.Title_Format_Url +'/'+item.Id }><img alt="" className="card-img-top" style={{ height: '170px', width: '100%', display: 'block' }} src={item.Avatar} /></a>
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

                } */}




              </div>
            </div>
          </div>
        </section>
      </>
      : <></>

  )
}
export default DetailImage
