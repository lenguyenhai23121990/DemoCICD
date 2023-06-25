import React from "react"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import 'typeface-roboto';
interface State {

}
type Props = State
const FromRefindSearch = (props: Props) => {

    return (
        <section>


                <div className="panel-group" id="accordion"><div className="panel panel-default widget-sidebar">
                    <div className="panel-heading">
                        <h4 className="panel-title panel-title-adjust">
                            <a href="#collapseTwoRSBibType" data-toggle="collapse">
                                <i className="fa fa-plus-circle" /> Loại tài liệu
                            </a>
                        </h4>
                    </div>
                    <div id="collapseTwoRSBibType" className="panel-collapse collapse  in  show ">
                        <div id="divRSBibType" className="panel-body overflow-auto">
                            <p><input type="checkbox" 
                            // onclick="javascript:ClientSearchRefineQuickSearch();"
                             name="RSBibType" className="form-check-input" id="chkrs_rsbibtype_0" defaultValue="rsbibtype$Ảnh" /><label className="form-check-label" htmlFor="chkrs_rsbibtype_0">Ảnh</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>11</label>
                            </p>
                        </div>
                    </div>
                </div>
                    <div className="panel panel-default widget-sidebar">
                        <div className="panel-heading">
                            <h4 className="panel-title panel-title-adjust">
                                <a href="#collapseTwoRSAuthor" data-toggle="collapse">
                                    <i className="fa fa-plus-circle" /> Tác giả
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwoRSAuthor" className="panel-collapse collapse  in ">
                            <div id="divRSAuthor" className="panel-body overflow-auto">
                                <p><input type="checkbox" 
                                // onclick="javascript:ClientSearchRefineQuickSearch();"
                                 name="RSAuthor" className="form-check-input" id="chkrs_rsauthor_0" defaultValue="rsauthor$Phạm Duy Quang Huy" /><label className="form-check-label" htmlFor="chkrs_rsauthor_0">Phạm Duy Quang Huy</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>11</label>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default widget-sidebar">
                        <div className="panel-heading">
                            <h4 className="panel-title panel-title-adjust">
                                <a href="#collapseTwoRSYear" data-toggle="collapse">
                                    <i className="fa fa-plus-circle" /> Năm xuất bản
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwoRSYear" className="panel-collapse collapse  in ">
                            <div id="divRSYear" className="panel-body overflow-auto">
                                <p><input type="checkbox"
                                //  onclick="javascript:ClientSearchRefineQuickSearchYear();" 
                                 name="RSYear" className="form-check-input" id="chkrs_rsyear_0" defaultValue="rsyear$25/11/2020" /><label className="form-check-label" htmlFor="chkrs_rsyear_0">25/11/2020</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>11</label>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default widget-sidebar">
                        <div className="panel-heading">
                            <h4 className="panel-title panel-title-adjust">
                                <a href="#collapseTwoRSKeyword" data-toggle="collapse">
                                    <i className="fa fa-plus-circle" /> Từ khóa
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwoRSKeyword" className="panel-collapse collapse  in ">
                            <div id="divRSKeyword" className="panel-body overflow-auto">
                                <p><input type="checkbox" 
                               // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_0" defaultValue="rskeyword$Lần thứ 38" /><label className="form-check-label" htmlFor="chkrs_rskeyword_0">Lần thứ 38</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>11</label>
                                </p>
                                <p><input type="checkbox"
                                // onclick="javascript:ClientSearchRefineQuickSearch();"
                                  name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_1" defaultValue="rskeyword$CAFEO 38" /><label className="form-check-label" htmlFor="chkrs_rskeyword_1">CAFEO 38</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>11</label>
                                </p>
                                <p><input type="checkbox" 
                               // onclick="javascript:ClientSearchRefineQuickSearch();"
                                 name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_2" defaultValue="rskeyword$Hội nghị" /><label className="form-check-label" htmlFor="chkrs_rskeyword_2">Hội nghị</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>11</label>
                                </p>
                                <p><input type="checkbox"
                                // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                 name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_3" defaultValue="rskeyword$Tổ chức Kỹ sư ASEAN" /><label className="form-check-label" htmlFor="chkrs_rskeyword_3">Tổ chức Kỹ sư ASEAN</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>11</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_4" defaultValue="rskeyword$Phó chủ tịch" /><label className="form-check-label" htmlFor="chkrs_rskeyword_4">Phó chủ tịch</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>6</label>
                                </p>
                                <p><input type="checkbox" 
                               // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_5" defaultValue="rskeyword$Liên hiệp các Hội Khoa học và Kỹ thuật Việt Nam" /><label className="form-check-label" htmlFor="chkrs_rskeyword_5">Liên hiệp các Hội Khoa học và Kỹ thuật Việt Nam</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>6</label>
                                </p>
                                <p><input type="checkbox"
                                // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                 name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_6" defaultValue="rskeyword$Kỹ sư chuyên nghiệp ASEAN" /><label className="form-check-label" htmlFor="chkrs_rskeyword_6">Kỹ sư chuyên nghiệp ASEAN</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>6</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_7" defaultValue="rskeyword$Chứng nhận" /><label className="form-check-label" htmlFor="chkrs_rskeyword_7">Chứng nhận</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>6</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_8" defaultValue="rskeyword$Nghiêm Vũ Khải" /><label className="form-check-label" htmlFor="chkrs_rskeyword_8">Nghiêm Vũ Khải</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>4</label>
                                </p>
                                <p><input type="checkbox"
                                 //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                 name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_9" defaultValue="rskeyword$Hội đồng đăng bạ kỹ sư ASEAN của Việt Nam" /><label className="form-check-label" htmlFor="chkrs_rskeyword_9">Hội đồng đăng bạ kỹ sư ASEAN của Việt Nam</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>3</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_10" defaultValue="rskeyword$Phạm Văn Tạc" /><label className="form-check-label" htmlFor="chkrs_rskeyword_10">Phạm Văn Tạc</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>3</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_11" defaultValue="rskeyword$Chủ tịch" /><label className="form-check-label" htmlFor="chkrs_rskeyword_11">Chủ tịch</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>3</label>
                                </p>
                                <p><input type="checkbox" 
                               // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_12" defaultValue="rskeyword$Phạm Quang Thao" /><label className="form-check-label" htmlFor="chkrs_rskeyword_12">Phạm Quang Thao</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>2</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_13" defaultValue="rskeyword$Hội Điện lực Việt Nam" /><label className="form-check-label" htmlFor="chkrs_rskeyword_13">Hội Điện lực Việt Nam</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>2</label>
                                </p>
                                <p><input type="checkbox" 
                               // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_14" defaultValue="rskeyword$GS.VS.TSKH Trần Đình Long" /><label className="form-check-label" htmlFor="chkrs_rskeyword_14">GS.VS.TSKH Trần Đình Long</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>2</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_15" defaultValue="rskeyword$Phát biểu" /><label className="form-check-label" htmlFor="chkrs_rskeyword_15">Phát biểu</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>2</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_16" defaultValue="rskeyword$Phó Tổng giám đốc" /><label className="form-check-label" htmlFor="chkrs_rskeyword_16">Phó Tổng giám đốc</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>2</label>
                                </p>
                                <p><input type="checkbox" 
                               // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_17" defaultValue="rskeyword$Toàn cảnh" /><label className="form-check-label" htmlFor="chkrs_rskeyword_17">Toàn cảnh</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_18" defaultValue="rskeyword$Vũ Ðức Ðam" /><label className="form-check-label" htmlFor="chkrs_rskeyword_18">Vũ Ðức Ðam</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_19" defaultValue="rskeyword$Trưởng Ban tổ chức" /><label className="form-check-label" htmlFor="chkrs_rskeyword_19">Trưởng Ban tổ chức</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_20" defaultValue="rskeyword$Tổng công ty Điện lực TP.Hồ Chí Minh" /><label className="form-check-label" htmlFor="chkrs_rskeyword_20">Tổng công ty Điện lực TP.Hồ Chí Minh</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox"
                                 //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                 name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_21" defaultValue="rskeyword$Ngô Sơn Hải" /><label className="form-check-label" htmlFor="chkrs_rskeyword_21">Ngô Sơn Hải</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_22" defaultValue="rskeyword$Trình bày" /><label className="form-check-label" htmlFor="chkrs_rskeyword_22">Trình bày</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_23" defaultValue="rskeyword$Tổng công ty Điện lực TP Hồ Chí Minh" /><label className="form-check-label" htmlFor="chkrs_rskeyword_23">Tổng công ty Điện lực TP Hồ Chí Minh</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox" 
                               // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_24" defaultValue="rskeyword$Trần Khiêm Tuấn" /><label className="form-check-label" htmlFor="chkrs_rskeyword_24">Trần Khiêm Tuấn</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox" 
                               // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_25" defaultValue="rskeyword$EVN" /><label className="form-check-label" htmlFor="chkrs_rskeyword_25">EVN</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox" 
                               // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_26" defaultValue="rskeyword$Tổng công ty Điện lực miền Trung" /><label className="form-check-label" htmlFor="chkrs_rskeyword_26">Tổng công ty Điện lực miền Trung</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox" 
                               // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_27" defaultValue="rskeyword$Danh hiệu" /><label className="form-check-label" htmlFor="chkrs_rskeyword_27">Danh hiệu</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox"
                                 //onclick="javascript:ClientSearchRefineQuickSearch();"
                                  name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_28" defaultValue="rskeyword$Tổng công ty Điện lực miền Nam" /><label className="form-check-label" htmlFor="chkrs_rskeyword_28">Tổng công ty Điện lực miền Nam</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();"
                                 name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_29" defaultValue="rskeyword$Thành viên danh dự AFEO" /><label className="form-check-label" htmlFor="chkrs_rskeyword_29">Thành viên danh dự AFEO</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox" 
                               // onclick="javascript:ClientSearchRefineQuickSearch();" 
                                name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_30" defaultValue="rskeyword$Tham luận" /><label className="form-check-label" htmlFor="chkrs_rskeyword_30">Tham luận</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                                <p><input type="checkbox" 
                                //onclick="javascript:ClientSearchRefineQuickSearch();"
                                 name="RSKeyword" className="form-check-input" id="chkrs_rskeyword_31" defaultValue="rskeyword$Phó Thủ tướng" /><label className="form-check-label" htmlFor="chkrs_rskeyword_31">Phó Thủ tướng</label>  <label className="form-check-label" htmlFor="exampleCheck1" style={{ float: 'right' }}>1</label>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default widget-sidebar">
                        <div className="panel-heading">
                            <h4 className="panel-title panel-title-adjust">
                                <a href="#collapseTwoRSSubject" data-toggle="collapse">
                                    <i className="fa fa-plus-circle" /> Chủ đề
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwoRSSubject" className="panel-collapse collapse ">
                            <div id="divRSSubject" className="overflow-auto">
                            </div>
                        </div>
                    </div>
                </div>
            
        </section>
    )
}
export default FromRefindSearch
