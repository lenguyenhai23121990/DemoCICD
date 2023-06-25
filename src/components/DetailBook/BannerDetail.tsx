import React from "react"


interface State {

}
type Props = State
const BannerDetail = (props: Props) => {

    return (
        <section>
         <div>
        <div id="ImageTopBanner" className="carousel slide" data-ride="carousel"> 
          <img src="http://10.161.10.104:8886/pages/cms/img/XemChiTiet.png" alt="" /> 
          <div className="row col-md-12" id="searchBannerSubPage">  
            <div className="container"> 
              <div className="row">
                <input type="text" id="txtKeyword" 
                //  onkeydown="javascript:if (event.keyCode == 13) {ClientSearchNews();}"
                  className="form-control span12" placeholder="Từ khóa...." />  
                <select className="form-control" id="cboCateChild"> 
                  <option value="">CHỌN TIÊU CHÍ TÌM KIẾM</option> 
                  <option value="title">Nhan đề</option> 
                  <option value="author">Tác giả</option> 
                  <option value="subject">Chủ đề</option> 
                  <option value="keyword">Từ khóa</option> 
                  <option value="yearpub">Năm xuất bản</option> 
                </select> 
                <a href="javascript:ClientSearchNews();" id="btnSearchHome" className="form-control"><i className="fa fa-search" /></a>    
              </div> 
            </div> 
          </div> 
        </div>
      </div>
    </section>
    )
}
export default BannerDetail
