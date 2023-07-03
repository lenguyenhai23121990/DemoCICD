import React from "react"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
interface State {

}
type Props = State
const FromResultSearch = (props: Props) => {

  return (

    <section>

      <div id="divSearchUtility" style={{}}>
        <div id="divSearchInfo" className="search-result alert alert-info" style={{}}><p>Tìm thấy <ins>5378</ins> <span>Kết quả</span></p></div>
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
              >
                <option selected value={10}>10</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={200}>200</option>
              </select>
            </div> <div className="pull-right">
              <div id="divPagination" className="tool-bar"><ul className="pagination pagination-sm cusPagination"><li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|', '5378','10','10','0','10','ClientPagingOnChange');"> <i className="fa fa-angle-double-left" /></a></li><li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','0','10','ClientPagingOnChange');"><i className="fa fa-angle-left" /></a></li><li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','0','10','ClientPagingOnChange');">1</a></li>
                <li className="active"><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','1','10','ClientPagingOnChange');">2</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','2','10','ClientPagingOnChange');">3</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','3','10','ClientPagingOnChange');">4</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','4','10','ClientPagingOnChange');">5</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','5','10','ClientPagingOnChange');">6</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','6','10','ClientPagingOnChange');">7</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','7','10','ClientPagingOnChange');">8</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','8','10','ClientPagingOnChange');">9</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','9','10','ClientPagingOnChange');">10</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','2','10','ClientPagingOnChange');"><i className="fa fa-angle-right" /></a></li><li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','537','10','ClientPagingOnChange');"><i className="fa fa-angle-double-right" /></a></li></ul></div>   <div id="divUtility" className="tool-bar navbar-right">
                <a href="javascript:ClientExportBib('cms', 'excel');" className="btn btn-default btn-sm" title="Chọn in ấn phẩm"><i className="fa fa-print" /></a>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        </div>
        <ul id="ulSearchResult" className="media-list result-list">    <li className="media">
          <div className="divDetailBibiSearch">
            <div className="radio-checkbox pull-left"><input type="checkbox" className="checkbox"
              //    onclick="ClientBibCheckBox('143562');"
              name="checkbox-bib" /> <label />  <span style={{ fontWeight: 900 }}>11.</span>
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <a href="../cms/viewdetail-lanh-dao-dang-uy-khoi-doanh-nghiep-ha-noi-tham-du-hoi-nghi-cong-bo-quyet-dinh-chuyen-giao--tiep-nhan-dang-bo-tong-cong-ty-dien-luc-mien-bac-tu-truc-thuoc-dang-bo-khoi-doanh-nghiep-ha-noi-ve-truc-thuoc-dang-bo-tap-doan-dien-luc-viet-nam-(thuoc-dang-bo-khoi-doanh-nghiep-trung-uong)-id-143562.html" target="_blank">Lãnh đạo Đảng ủy Khối Doanh nghiệp Hà Nội tham dự Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)</a>
                <input type="hidden" id="hdBibId" defaultValue={143562} />
                <input type="hidden" id="hdDbBibTitle143562" defaultValue="Lãnh đạo Đảng ủy Khối Doanh nghiệp Hà Nội tham dự Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)" />
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
                    <div id="divBibDetail143562" className="media doc-details">    <div className="media-left">
                      <a href="#"><img alt="..." src="http://113.160.187.1:82/pages/opac/images/no-thumb/nothumb.jpg" className="media-object" /></a>
                    </div>
                      <div className="media-body">
                        <dl>
                          <dd> <dl >
                            <dd style={{ width: '30%', float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }}><strong>Phân loại BBK:</strong></dd>
                            <dd style={{ width: '70%', float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>351.597/ C 120 N
                            </dd>
                          </dl> </dd>
                          <dd> <dl >
                            <dd style={{ width: '30%', float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }}><strong>Thông tin xb:</strong></dd>
                            <dd style={{ width: '70%', float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>H.: Lao động, 2022</dd>
                          </dl> </dd>
                          <dd> <dl >
                            <dd style={{ width: '30%', float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }}><strong>Mô tả vật lý:</strong></dd>
                            <dd style={{ width: '70%', float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>391tr., 28cm</dd>
                          </dl> </dd>
                          <dd> <dl >
                            <dd style={{ width: '30%', float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }}><strong>Tóm tắt:</strong></dd>
                            <dd style={{ width: '70%', float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>Nội dung Luật thư viện và văn bản hướng dẫn thi hành; Luật lưu trữ và văn bản hướng dẫn thi hành; quy định về công tác văn thư và thể thức, kỹ thuật trình bày văn bản hành chính và bản sao văn bản;...</dd>
                          </dl> </dd>
                          <dd> <dl >
                            <dd style={{ width: '30%', float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }}><strong>Từ khóa:</strong></dd> <dd style={{ width: '70%', float: 'left', whiteSpace: 'pre-line', display: 'inline' }}><a className="text-info" href="../opac/wpid-search-stype-form-quick-sfield-all-keyword-Luật Thư viện.html">Luật Thư viện</a>;&nbsp;<a className="text-info" href="../opac/wpid-search-stype-form-quick-sfield-all-keyword-Luật Lưu trữ.html">Luật Lưu trữ</a>;&nbsp;<a className="text-info" href="../opac/wpid-search-stype-form-quick-sfield-all-keyword-Công tác văn thư lưu trữ.html">Công tác văn thư lưu trữ</a>;&nbsp;<a className="text-info" href="../opac/wpid-search-stype-form-quick-sfield-all-keyword-Soạn thảo văn bản.html">Soạn thảo văn bản</a>;&nbsp;<a className="text-info" href="../opac/wpid-search-stype-form-quick-sfield-all-keyword-Hợp đồng.html">Hợp đồng</a> </dd>
                          </dl> </dd>
                        </dl>
                      </div>
                      <div className="media-right">
                        <img alt="" src="http://113.160.187.1:82/pages/opac/TempDir/qrcode/ILIB/1/75565.jpg" className="qr" />
                      </div> </div>
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
          <li className="media">
            <div className="divDetailBibiSearch">
              <div className="radio-checkbox pull-left"><input type="checkbox" className="checkbox"
              //    onclick="ClientBibCheckBox('143563');" name="checkbox-bib" 
              /> <label />  <span style={{ fontWeight: 900 }}>12.</span>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  <a href="../cms/viewdetail-lanh-dao-dang-uy-evn-va-tong-cong-ty-dien-luc-mien-bac-tham-du-hoi-nghi-cong-bo-quyet-dinh-chuyen-giao--tiep-nhan-dang-bo-tong-cong-ty-dien-luc-mien-bac-tu-truc-thuoc-dang-bo-khoi-doanh-nghiep-ha-noi-ve-truc-thuoc-dang-bo-tap-doan-dien-luc-viet-nam-(thuoc-dang-bo-khoi-doanh-nghiep-trung-uong)-id-143563.html" target="_blank">Lãnh đạo Đảng ủy EVN và Tổng công ty Điện lực miền Bắc tham dự Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)</a>
                  <input type="hidden" id="hdBibId" defaultValue={143563} />
                  <input type="hidden" id="hdDbBibTitle143563" defaultValue="Lãnh đạo Đảng ủy EVN và Tổng công ty Điện lực miền Bắc tham dự Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)" />
                  <input type="hidden" id="hdDbSource" defaultValue="DLIB" />
                </h4>
              </div>
              <div className="tabbable panel panel-default" id="tabs-202996">
                {/* tab */}
                {/* tab */}
                {/* content panel body*/}
                <div className="tab-content-result panel-body">
                  {/* tab content */}
                  <div className="tab-pane active" id="panel-intro143563">
                    <dl id="divBibInfo143563" style={{ display: 'none' }} className="doc-dl">
                    </dl>
                    <div id="divBibDetail143563" className="media doc-details">
                      <div id="divBibDetail143562" className="media doc-details">    <div className="media-left">
                        <a href="#"><img alt="..." src="http://113.160.187.1:82/pages/opac/images/no-thumb/nothumb.jpg" className="media-object" /></a>
                      </div>
                        <div className="media-body">
                          <dl>
                            <dd> <dl >
                              <dd style={{ width: '30%', float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }}><strong>Phân loại BBK:</strong></dd>
                              <dd style={{ width: '70%', float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>351.597/ C 120 N
                              </dd>
                            </dl> </dd>
                            <dd> <dl >
                              <dd style={{ width: '30%', float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }}><strong>Thông tin xb:</strong></dd>
                              <dd style={{ width: '70%', float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>H.: Lao động, 2022</dd>
                            </dl> </dd>
                            <dd> <dl >
                              <dd style={{ width: '30%', float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }}><strong>Mô tả vật lý:</strong></dd>
                              <dd style={{ width: '70%', float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>391tr., 28cm</dd>
                            </dl> </dd>
                            <dd> <dl >
                              <dd style={{ width: '30%', float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }}><strong>Tóm tắt:</strong></dd>
                              <dd style={{ width: '70%', float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>Nội dung Luật thư viện và văn bản hướng dẫn thi hành; Luật lưu trữ và văn bản hướng dẫn thi hành; quy định về công tác văn thư và thể thức, kỹ thuật trình bày văn bản hành chính và bản sao văn bản;...</dd>
                            </dl> </dd>
                            <dd> <dl >
                              <dd style={{ width: '30%', float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }}><strong>Từ khóa:</strong></dd> <dd style={{ width: '70%', float: 'left', whiteSpace: 'pre-line', display: 'inline' }}><a className="text-info" href="../opac/wpid-search-stype-form-quick-sfield-all-keyword-Luật Thư viện.html">Luật Thư viện</a>;&nbsp;<a className="text-info" href="../opac/wpid-search-stype-form-quick-sfield-all-keyword-Luật Lưu trữ.html">Luật Lưu trữ</a>;&nbsp;<a className="text-info" href="../opac/wpid-search-stype-form-quick-sfield-all-keyword-Công tác văn thư lưu trữ.html">Công tác văn thư lưu trữ</a>;&nbsp;<a className="text-info" href="../opac/wpid-search-stype-form-quick-sfield-all-keyword-Soạn thảo văn bản.html">Soạn thảo văn bản</a>;&nbsp;<a className="text-info" href="../opac/wpid-search-stype-form-quick-sfield-all-keyword-Hợp đồng.html">Hợp đồng</a> </dd>
                            </dl> </dd>
                          </dl>
                        </div>
                        <div className="media-right">
                          <img alt="" src="http://113.160.187.1:82/pages/opac/TempDir/qrcode/ILIB/1/75565.jpg" className="qr" />
                        </div> </div>

                    </div>
                    <div id="divBibDetailView143563" className="table-wrap" style={{ display: 'none' }} />
                    <div id="divBibDigitalInfo143563" className="table-wrap" style={{ display: 'none' }} />
                    <div>
                      <a id="aBibDetail143563" style={{ display: 'none' }} className="btn btn-default btn-xs" href="javascript:ClientViewBibDetailV2('cms', '143563', '0');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
                      <a id="aBibInfo143563" className="btn btn-default btn-xs" style={{ display: 'none' }} href="javascript:ClientBackToBibInfo('cms', '143563', '143563');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
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
                <div className="tab-pane" id="panel-shelf143563" />
                {/* tab content */}
                <div className="tab-pane" id="panel-link143563" />
                {/* tab content */}
                <div className="tab-pane" id="panel-docsource143563" />
                {/* tab content */}
                <div className="tab-pane" id="panel-digital143563" />
                {/* tab content */}
                <div className="tab-pane" id="panel-comment143563" />
                {/* tab content */}
                <div className="tab-pane" id="panel-search143563" />
              </div>
            </div>
            {/* content panel body */}
          </li>
          <li className="media">
            <div className="divDetailBibiSearch">
              <div className="radio-checkbox pull-left"><input type="checkbox" className="checkbox"
              //    onclick="ClientBibCheckBox('143564');" name="checkbox-bib"
              /> <label />  <span style={{ fontWeight: 900 }}>13.</span>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  <a href="../cms/viewdetail-lanh-dao-khoi-doanh-nghiep-ha-noi-va-dang-uy-evn-tham-du-hoi-nghi-cong-bo-quyet-dinh-chuyen-giao--tiep-nhan-dang-bo-tong-cong-ty-dien-luc-mien-bac-tu-truc-thuoc-dang-bo-khoi-doanh-nghiep-ha-noi-ve-truc-thuoc-dang-bo-tap-doan-dien-luc-viet-nam-(thuoc-dang-bo-khoi-doanh-nghiep-trung-uong)-id-143564.html" target="_blank">Lãnh đạo Khối Doanh nghiệp Hà Nội và Đảng ủy EVN tham dự Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)</a>
                  <input type="hidden" id="hdBibId" defaultValue={143564} />
                  <input type="hidden" id="hdDbBibTitle143564" defaultValue="Lãnh đạo Khối Doanh nghiệp Hà Nội và Đảng ủy EVN tham dự Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)" />
                  <input type="hidden" id="hdDbSource" defaultValue="DLIB" />
                </h4>
              </div>
              <div className="tabbable panel panel-default" id="tabs-202996">
                {/* tab */}
                {/* tab */}
                {/* content panel body*/}
                <div className="tab-content-result panel-body">
                  {/* tab content */}
                  <div className="tab-pane active" id="panel-intro143564">
                    <dl id="divBibInfo143564" style={{ display: 'none' }} className="doc-dl">
                    </dl>
                    <div id="divBibDetail143564" className="media doc-details">    <div className="media-body">
                      <dl>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Loại CSDL: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>Ảnh</dd> </div>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Năm: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>2023</dd> </div>
                      </dl>
                    </div>
                    </div>
                    <div id="divBibDetailView143564" className="table-wrap" style={{ display: 'none' }} />
                    <div id="divBibDigitalInfo143564" className="table-wrap" style={{ display: 'none' }} />
                    <div>
                      <a id="aBibDetail143564" style={{ display: 'none' }} className="btn btn-default btn-xs" href="javascript:ClientViewBibDetailV2('cms', '143564', '0');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
                      <a id="aBibInfo143564" className="btn btn-default btn-xs" style={{ display: 'none' }} href="javascript:ClientBackToBibInfo('cms', '143564', '143564');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
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
                <div className="tab-pane" id="panel-shelf143564" />
                {/* tab content */}
                <div className="tab-pane" id="panel-link143564" />
                {/* tab content */}
                <div className="tab-pane" id="panel-docsource143564" />
                {/* tab content */}
                <div className="tab-pane" id="panel-digital143564" />
                {/* tab content */}
                <div className="tab-pane" id="panel-comment143564" />
                {/* tab content */}
                <div className="tab-pane" id="panel-search143564" />
              </div>
            </div>
            {/* content panel body */}
          </li>
          <li className="media">
            <div className="divDetailBibiSearch">
              <div className="radio-checkbox pull-left"><input type="checkbox" className="checkbox"
              //    onclick="ClientBibCheckBox('143565');" name="checkbox-bib" 
              /> <label />  <span style={{ fontWeight: 900 }}>14.</span>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  <a href="../cms/viewdetail-uy-vien-btv-dang-uy--truong-ban-to-chuc-dang-uy--truong-ban-to-chuc-va-nhan-su-evn-tran-viet-anh-phat-bieu-tai-hoi-nghi-cong-bo-quyet-dinh-chuyen-giao--tiep-nhan-dang-bo-tong-cong-ty-dien-luc-mien-bac-tu-truc-thuoc-dang-bo-khoi-doanh-nghiep-ha-noi-ve-truc-thuoc-dang-bo-tap-doan-dien-luc-viet-nam-(thuoc-dang-bo-khoi-doanh-nghiep-trung-uong)-id-143565.html" target="_blank">Ủy viên BTV Đảng ủy, Trưởng ban Tổ chức Đảng ủy, Trưởng ban Tổ chức và Nhân sự EVN Trần Việt Anh phát biểu tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)</a>
                  <input type="hidden" id="hdBibId" defaultValue={143565} />
                  <input type="hidden" id="hdDbBibTitle143565" defaultValue="Ủy viên BTV Đảng ủy, Trưởng ban Tổ chức Đảng ủy, Trưởng ban Tổ chức và Nhân sự EVN Trần Việt Anh phát biểu tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)" />
                  <input type="hidden" id="hdDbSource" defaultValue="DLIB" />
                </h4>
              </div>
              <div className="tabbable panel panel-default" id="tabs-202996">
                {/* tab */}
                {/* tab */}
                {/* content panel body*/}
                <div className="tab-content-result panel-body">
                  {/* tab content */}
                  <div className="tab-pane active" id="panel-intro143565">
                    <dl id="divBibInfo143565" style={{ display: 'none' }} className="doc-dl">
                    </dl>
                    <div id="divBibDetail143565" className="media doc-details">    <div className="media-body">
                      <dl>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Loại CSDL: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>Ảnh</dd> </div>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Năm: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>2023</dd> </div>
                      </dl>
                    </div>
                    </div>
                    <div id="divBibDetailView143565" className="table-wrap" style={{ display: 'none' }} />
                    <div id="divBibDigitalInfo143565" className="table-wrap" style={{ display: 'none' }} />
                    <div>
                      <a id="aBibDetail143565" style={{ display: 'none' }} className="btn btn-default btn-xs" href="javascript:ClientViewBibDetailV2('cms', '143565', '0');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
                      <a id="aBibInfo143565" className="btn btn-default btn-xs" style={{ display: 'none' }} href="javascript:ClientBackToBibInfo('cms', '143565', '143565');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
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
                <div className="tab-pane" id="panel-shelf143565" />
                {/* tab content */}
                <div className="tab-pane" id="panel-link143565" />
                {/* tab content */}
                <div className="tab-pane" id="panel-docsource143565" />
                {/* tab content */}
                <div className="tab-pane" id="panel-digital143565" />
                {/* tab content */}
                <div className="tab-pane" id="panel-comment143565" />
                {/* tab content */}
                <div className="tab-pane" id="panel-search143565" />
              </div>
            </div>
            {/* content panel body */}
          </li>
          <li className="media">
            <div className="divDetailBibiSearch">
              <div className="radio-checkbox pull-left"><input type="checkbox" className="checkbox"
              //    onclick="ClientBibCheckBox('143566');" name="checkbox-bib" 
              /> <label />  <span style={{ fontWeight: 900 }}>15.</span>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  <a href="../cms/viewdetail-pho-bi-thu-dang-uy-phu-trach-dang-bo--tong-giam-doc-evn-tran-dinh-nhan-thay-mat-dang-uy-evn-trao-quyet-dinh-tiep-nhan-to-chuc-co-so-dang-doi-voi-dang-bo-tong-cong-ty-dien-luc-mien-bac-tai-hoi-nghi-cong-bo-quyet-dinh-chuyen-giao--tiep-nhan-dang-bo-tong-cong-ty-dien-luc-mien-bac-tu-truc-thuoc-dang-bo-khoi-doanh-nghiep-ha-noi-ve-truc-thuoc-dang-bo-tap-doan-dien-luc-viet-nam-(thuoc-dang-bo-khoi-doanh-nghiep-trung-uong)-id-143566.html" target="_blank">Phó Bí thư Đảng ủy phụ trách Đảng bộ, Tổng giám đốc EVN Trần Đình Nhân thay mặt Đảng ủy EVN trao quyết định tiếp nhận tổ chức Cơ sở đảng đối với Đảng bộ Tổng công ty Điện lực miền Bắc tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)</a>
                  <input type="hidden" id="hdBibId" defaultValue={143566} />
                  <input type="hidden" id="hdDbBibTitle143566" defaultValue="Phó Bí thư Đảng ủy phụ trách Đảng bộ, Tổng giám đốc EVN Trần Đình Nhân thay mặt Đảng ủy EVN trao quyết định tiếp nhận tổ chức Cơ sở đảng đối với Đảng bộ Tổng công ty Điện lực miền Bắc tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)" />
                  <input type="hidden" id="hdDbSource" defaultValue="DLIB" />
                </h4>
              </div>
              <div className="tabbable panel panel-default" id="tabs-202996">
                {/* tab */}
                {/* tab */}
                {/* content panel body*/}
                <div className="tab-content-result panel-body">
                  {/* tab content */}
                  <div className="tab-pane active" id="panel-intro143566">
                    <dl id="divBibInfo143566" style={{ display: 'none' }} className="doc-dl">
                    </dl>
                    <div id="divBibDetail143566" className="media doc-details">    <div className="media-body">
                      <dl>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Loại CSDL: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>Ảnh</dd> </div>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Năm: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>2023</dd> </div>
                      </dl>
                    </div>
                    </div>
                    <div id="divBibDetailView143566" className="table-wrap" style={{ display: 'none' }} />
                    <div id="divBibDigitalInfo143566" className="table-wrap" style={{ display: 'none' }} />
                    <div>
                      <a id="aBibDetail143566" style={{ display: 'none' }} className="btn btn-default btn-xs" href="javascript:ClientViewBibDetailV2('cms', '143566', '0');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
                      <a id="aBibInfo143566" className="btn btn-default btn-xs" style={{ display: 'none' }} href="javascript:ClientBackToBibInfo('cms', '143566', '143566');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
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
                <div className="tab-pane" id="panel-shelf143566" />
                {/* tab content */}
                <div className="tab-pane" id="panel-link143566" />
                {/* tab content */}
                <div className="tab-pane" id="panel-docsource143566" />
                {/* tab content */}
                <div className="tab-pane" id="panel-digital143566" />
                {/* tab content */}
                <div className="tab-pane" id="panel-comment143566" />
                {/* tab content */}
                <div className="tab-pane" id="panel-search143566" />
              </div>
            </div>
            {/* content panel body */}
          </li>
          <li className="media">
            <div className="divDetailBibiSearch">
              <div className="radio-checkbox pull-left"><input type="checkbox" className="checkbox"
              //    onclick="ClientBibCheckBox('143567');" name="checkbox-bib" 
              /> <label />  <span style={{ fontWeight: 900 }}>16.</span>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  <a href="../cms/viewdetail-pho-bi-thu-dang-uy-phu-trach-dang-bo--tong-giam-doc-evn-tran-dinh-nhan-thay-mat-dang-uy-evn-trao-quyet-dinh-tiep-nhan-to-chuc-co-so-dang-doi-voi-dang-bo-tong-cong-ty-dien-luc-mien-bac-tai-hoi-nghi-cong-bo-quyet-dinh-chuyen-giao--tiep-nhan-dang-bo-tong-cong-ty-dien-luc-mien-bac-tu-truc-thuoc-dang-bo-khoi-doanh-nghiep-ha-noi-ve-truc-thuoc-dang-bo-tap-doan-dien-luc-viet-nam-(thuoc-dang-bo-khoi-doanh-nghiep-trung-uong)-id-143567.html" target="_blank">Phó Bí thư Đảng ủy phụ trách Đảng bộ, Tổng giám đốc EVN Trần Đình Nhân thay mặt Đảng ủy EVN trao quyết định tiếp nhận tổ chức Cơ sở đảng đối với Đảng bộ Tổng công ty Điện lực miền Bắc tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)</a>
                  <input type="hidden" id="hdBibId" defaultValue={143567} />
                  <input type="hidden" id="hdDbBibTitle143567" defaultValue="Phó Bí thư Đảng ủy phụ trách Đảng bộ, Tổng giám đốc EVN Trần Đình Nhân thay mặt Đảng ủy EVN trao quyết định tiếp nhận tổ chức Cơ sở đảng đối với Đảng bộ Tổng công ty Điện lực miền Bắc tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)" />
                  <input type="hidden" id="hdDbSource" defaultValue="DLIB" />
                </h4>
              </div>
              <div className="tabbable panel panel-default" id="tabs-202996">
                {/* tab */}
                {/* tab */}
                {/* content panel body*/}
                <div className="tab-content-result panel-body">
                  {/* tab content */}
                  <div className="tab-pane active" id="panel-intro143567">
                    <dl id="divBibInfo143567" style={{ display: 'none' }} className="doc-dl">
                    </dl>
                    <div id="divBibDetail143567" className="media doc-details">    <div className="media-body">
                      <dl>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Loại CSDL: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>Ảnh</dd> </div>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Năm: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>2023</dd> </div>
                      </dl>
                    </div>
                    </div>
                    <div id="divBibDetailView143567" className="table-wrap" style={{ display: 'none' }} />
                    <div id="divBibDigitalInfo143567" className="table-wrap" style={{ display: 'none' }} />
                    <div>
                      <a id="aBibDetail143567" style={{ display: 'none' }} className="btn btn-default btn-xs" href="javascript:ClientViewBibDetailV2('cms', '143567', '0');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
                      <a id="aBibInfo143567" className="btn btn-default btn-xs" style={{ display: 'none' }} href="javascript:ClientBackToBibInfo('cms', '143567', '143567');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
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
                <div className="tab-pane" id="panel-shelf143567" />
                {/* tab content */}
                <div className="tab-pane" id="panel-link143567" />
                {/* tab content */}
                <div className="tab-pane" id="panel-docsource143567" />
                {/* tab content */}
                <div className="tab-pane" id="panel-digital143567" />
                {/* tab content */}
                <div className="tab-pane" id="panel-comment143567" />
                {/* tab content */}
                <div className="tab-pane" id="panel-search143567" />
              </div>
            </div>
            {/* content panel body */}
          </li>
          <li className="media">
            <div className="divDetailBibiSearch">
              <div className="radio-checkbox pull-left"><input type="checkbox" className="checkbox"
                //    onclick="ClientBibCheckBox('143568');"
                name="checkbox-bib" /> <label />  <span style={{ fontWeight: 900 }}>17.</span>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  <a href="../cms/viewdetail-bi-thu-dang-uy-khoi-doanh-nghiep-ha-noi-nguyen-truong-son-phat-bieu-tai-hoi-nghi-cong-bo-quyet-dinh-chuyen-giao--tiep-nhan-dang-bo-tong-cong-ty-dien-luc-mien-bac-tu-truc-thuoc-dang-bo-khoi-doanh-nghiep-ha-noi-ve-truc-thuoc-dang-bo-tap-doan-dien-luc-viet-nam-(thuoc-dang-bo-khoi-doanh-nghiep-trung-uong)-id-143568.html" target="_blank">Bí thư Đảng ủy Khối doanh nghiệp Hà Nội Nguyễn Trường Sơn phát biểu tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)</a>
                  <input type="hidden" id="hdBibId" defaultValue={143568} />
                  <input type="hidden" id="hdDbBibTitle143568" defaultValue="Bí thư Đảng ủy Khối doanh nghiệp Hà Nội Nguyễn Trường Sơn phát biểu tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)" />
                  <input type="hidden" id="hdDbSource" defaultValue="DLIB" />
                </h4>
              </div>
              <div className="tabbable panel panel-default" id="tabs-202996">
                {/* tab */}
                {/* tab */}
                {/* content panel body*/}
                <div className="tab-content-result panel-body">
                  {/* tab content */}
                  <div className="tab-pane active" id="panel-intro143568">
                    <dl id="divBibInfo143568" style={{ display: 'none' }} className="doc-dl">
                    </dl>
                    <div id="divBibDetail143568" className="media doc-details">    <div className="media-body">
                      <dl>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Loại CSDL: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>Ảnh</dd> </div>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Năm: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>2023</dd> </div>
                      </dl>
                    </div>
                    </div>
                    <div id="divBibDetailView143568" className="table-wrap" style={{ display: 'none' }} />
                    <div id="divBibDigitalInfo143568" className="table-wrap" style={{ display: 'none' }} />
                    <div>
                      <a id="aBibDetail143568" style={{ display: 'none' }} className="btn btn-default btn-xs" href="javascript:ClientViewBibDetailV2('cms', '143568', '0');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
                      <a id="aBibInfo143568" className="btn btn-default btn-xs" style={{ display: 'none' }} href="javascript:ClientBackToBibInfo('cms', '143568', '143568');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
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
                <div className="tab-pane" id="panel-shelf143568" />
                {/* tab content */}
                <div className="tab-pane" id="panel-link143568" />
                {/* tab content */}
                <div className="tab-pane" id="panel-docsource143568" />
                {/* tab content */}
                <div className="tab-pane" id="panel-digital143568" />
                {/* tab content */}
                <div className="tab-pane" id="panel-comment143568" />
                {/* tab content */}
                <div className="tab-pane" id="panel-search143568" />
              </div>
            </div>
            {/* content panel body */}
          </li>
          <li className="media">
            <div className="divDetailBibiSearch">
              <div className="radio-checkbox pull-left"><input type="checkbox" className="checkbox"
                //    onclick="ClientBibCheckBox('143569');" 
                name="checkbox-bib" /> <label />  <span style={{ fontWeight: 900 }}>18.</span>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  <a href="../cms/viewdetail-pho-bi-thu-dang-uy-phu-trach-dang-bo--tong-giam-doc-evn-tran-dinh-nhan-phat-bieu-tai-hoi-nghi-cong-bo-quyet-dinh-chuyen-giao--tiep-nhan-dang-bo-tong-cong-ty-dien-luc-mien-bac-tu-truc-thuoc-dang-bo-khoi-doanh-nghiep-ha-noi-ve-truc-thuoc-dang-bo-tap-doan-dien-luc-viet-nam-(thuoc-dang-bo-khoi-doanh-nghiep-trung-uong)-id-143569.html" target="_blank">Phó Bí thư Đảng ủy phụ trách Đảng bộ, Tổng giám đốc EVN Trần Đình Nhân phát biểu tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)</a>
                  <input type="hidden" id="hdBibId" defaultValue={143569} />
                  <input type="hidden" id="hdDbBibTitle143569" defaultValue="Phó Bí thư Đảng ủy phụ trách Đảng bộ, Tổng giám đốc EVN Trần Đình Nhân phát biểu tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)" />
                  <input type="hidden" id="hdDbSource" defaultValue="DLIB" />
                </h4>
              </div>
              <div className="tabbable panel panel-default" id="tabs-202996">
                {/* tab */}
                {/* tab */}
                {/* content panel body*/}
                <div className="tab-content-result panel-body">
                  {/* tab content */}
                  <div className="tab-pane active" id="panel-intro143569">
                    <dl id="divBibInfo143569" style={{ display: 'none' }} className="doc-dl">
                    </dl>
                    <div id="divBibDetail143569" className="media doc-details">    <div className="media-body">
                      <dl>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Loại CSDL: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>Ảnh</dd> </div>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Năm: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>2023</dd> </div>
                      </dl>
                    </div>
                    </div>
                    <div id="divBibDetailView143569" className="table-wrap" style={{ display: 'none' }} />
                    <div id="divBibDigitalInfo143569" className="table-wrap" style={{ display: 'none' }} />
                    <div>
                      <a id="aBibDetail143569" style={{ display: 'none' }} className="btn btn-default btn-xs" href="javascript:ClientViewBibDetailV2('cms', '143569', '0');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
                      <a id="aBibInfo143569" className="btn btn-default btn-xs" style={{ display: 'none' }} href="javascript:ClientBackToBibInfo('cms', '143569', '143569');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
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
                <div className="tab-pane" id="panel-shelf143569" />
                {/* tab content */}
                <div className="tab-pane" id="panel-link143569" />
                {/* tab content */}
                <div className="tab-pane" id="panel-docsource143569" />
                {/* tab content */}
                <div className="tab-pane" id="panel-digital143569" />
                {/* tab content */}
                <div className="tab-pane" id="panel-comment143569" />
                {/* tab content */}
                <div className="tab-pane" id="panel-search143569" />
              </div>
            </div>
            {/* content panel body */}
          </li>
          <li className="media">
            <div className="divDetailBibiSearch">
              <div className="radio-checkbox pull-left"><input type="checkbox" className="checkbox"
                //    onclick="ClientBibCheckBox('143570');"
                name="checkbox-bib" /> <label />  <span style={{ fontWeight: 900 }}>19.</span>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  <a href="../cms/viewdetail-pho-bi-thu-dang-uy-phu-trach-dang-bo--tong-giam-doc-evn-tran-dinh-nhan-phat-bieu-tai-hoi-nghi-cong-bo-quyet-dinh-chuyen-giao--tiep-nhan-dang-bo-tong-cong-ty-dien-luc-mien-bac-tu-truc-thuoc-dang-bo-khoi-doanh-nghiep-ha-noi-ve-truc-thuoc-dang-bo-tap-doan-dien-luc-viet-nam-(thuoc-dang-bo-khoi-doanh-nghiep-trung-uong)-id-143570.html" target="_blank">Phó Bí thư Đảng ủy phụ trách Đảng bộ, Tổng giám đốc EVN Trần Đình Nhân phát biểu tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)</a>
                  <input type="hidden" id="hdBibId" defaultValue={143570} />
                  <input type="hidden" id="hdDbBibTitle143570" defaultValue="Phó Bí thư Đảng ủy phụ trách Đảng bộ, Tổng giám đốc EVN Trần Đình Nhân phát biểu tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)" />
                  <input type="hidden" id="hdDbSource" defaultValue="DLIB" />
                </h4>
              </div>
              <div className="tabbable panel panel-default" id="tabs-202996">
                {/* tab */}
                {/* tab */}
                {/* content panel body*/}
                <div className="tab-content-result panel-body">
                  {/* tab content */}
                  <div className="tab-pane active" id="panel-intro143570">
                    <dl id="divBibInfo143570" style={{ display: 'none' }} className="doc-dl">
                    </dl>
                    <div id="divBibDetail143570" className="media doc-details">    <div className="media-body">
                      <dl>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Loại CSDL: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>Ảnh</dd> </div>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Năm: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>2023</dd> </div>
                      </dl>
                    </div>
                    </div>
                    <div id="divBibDetailView143570" className="table-wrap" style={{ display: 'none' }} />
                    <div id="divBibDigitalInfo143570" className="table-wrap" style={{ display: 'none' }} />
                    <div>
                      <a id="aBibDetail143570" style={{ display: 'none' }} className="btn btn-default btn-xs" href="javascript:ClientViewBibDetailV2('cms', '143570', '0');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
                      <a id="aBibInfo143570" className="btn btn-default btn-xs" style={{ display: 'none' }} href="javascript:ClientBackToBibInfo('cms', '143570', '143570');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
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
                <div className="tab-pane" id="panel-shelf143570" />
                {/* tab content */}
                <div className="tab-pane" id="panel-link143570" />
                {/* tab content */}
                <div className="tab-pane" id="panel-docsource143570" />
                {/* tab content */}
                <div className="tab-pane" id="panel-digital143570" />
                {/* tab content */}
                <div className="tab-pane" id="panel-comment143570" />
                {/* tab content */}
                <div className="tab-pane" id="panel-search143570" />
              </div>
            </div>
            {/* content panel body */}
          </li>
          <li className="media">
            <div className="divDetailBibiSearch">
              <div className="radio-checkbox pull-left"><input type="checkbox" className="checkbox"
                //   onclick="ClientBibCheckBox('143571');" 
                name="checkbox-bib" /> <label />  <span style={{ fontWeight: 900 }}>20.</span>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  <a href="../cms/viewdetail-dong-chi-do-nguyet-anh--bi-thu-dang-uy--chu-tich-hdtv-evnnpc-phat-bieu-tai-hoi-nghi-cong-bo-quyet-dinh-chuyen-giao--tiep-nhan-dang-bo-tong-cong-ty-dien-luc-mien-bac-tu-truc-thuoc-dang-bo-khoi-doanh-nghiep-ha-noi-ve-truc-thuoc-dang-bo-tap-doan-dien-luc-viet-nam-(thuoc-dang-bo-khoi-doanh-nghiep-trung-uong)-id-143571.html" target="_blank">Đồng chí Đỗ Nguyệt Ánh, Bí thư Đảng ủy, Chủ tịch HĐTV EVNNPC phát biểu tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)</a>
                  <input type="hidden" id="hdBibId" defaultValue={143571} />
                  <input type="hidden" id="hdDbBibTitle143571" defaultValue="Đồng chí Đỗ Nguyệt Ánh, Bí thư Đảng ủy, Chủ tịch HĐTV EVNNPC phát biểu tại Hội nghị công bố quyết định chuyển giao, tiếp nhận Đảng bộ Tổng công ty Điện lực miền Bắc từ trực thuộc Đảng bộ Khối Doanh nghiệp Hà Nội về trực thuộc Đảng bộ Tập đoàn Điện lực Việt Nam (thuộc Đảng bộ Khối Doanh nghiệp Trung ương)" />
                  <input type="hidden" id="hdDbSource" defaultValue="DLIB" />
                </h4>
              </div>
              <div className="tabbable panel panel-default" id="tabs-202996">
                {/* tab */}
                {/* tab */}
                {/* content panel body*/}
                <div className="tab-content-result panel-body">
                  {/* tab content */}
                  <div className="tab-pane active" id="panel-intro143571">
                    <dl id="divBibInfo143571" style={{ display: 'none' }} className="doc-dl">
                    </dl>
                    <div id="divBibDetail143571" className="media doc-details">    <div className="media-body">
                      <dl>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Loại CSDL: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>Ảnh</dd> </div>
                        <div style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline-flex' }} className="col-sm-12 col-md-12 col-12"><strong>Năm: &nbsp;</strong>
                          <dd style={{ float: 'left', whiteSpace: 'pre-line', display: 'inline' }}>2023</dd> </div>
                      </dl>
                    </div>
                    </div>
                    <div id="divBibDetailView143571" className="table-wrap" style={{ display: 'none' }} />
                    <div id="divBibDigitalInfo143571" className="table-wrap" style={{ display: 'none' }} />
                    <div>
                      <a id="aBibDetail143571" style={{ display: 'none' }} className="btn btn-default btn-xs" href="javascript:ClientViewBibDetailV2('cms', '143571', '0');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
                      <a id="aBibInfo143571" className="btn btn-default btn-xs" style={{ display: 'none' }} href="javascript:ClientBackToBibInfo('cms', '143571', '143571');">Chi tiết <i className="fa fa-long-arrow-right" /></a>
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
                <div className="tab-pane" id="panel-shelf143571" />
                {/* tab content */}
                <div className="tab-pane" id="panel-link143571" />
                {/* tab content */}
                <div className="tab-pane" id="panel-docsource143571" />
                {/* tab content */}
                <div className="tab-pane" id="panel-digital143571" />
                {/* tab content */}
                <div className="tab-pane" id="panel-comment143571" />
                {/* tab content */}
                <div className="tab-pane" id="panel-search143571" />
              </div>
            </div>
            {/* content panel body */}
          </li>
          <input type="hidden" id="hdStrBib" name="hdStrBib" defaultValue="143562,143563,143564,143565,143566,143567,143568,143569,143570,143571" />
        </ul>
        <div id="divSearchFilterBottom" className="tool-bar">   <div>
          {/* checkbox */}
          {/* sort */}
          <div className="sort-by">
            <div className="pull-right">
              <div id="divPaginationBottom" className="tool-bar"><ul className="pagination pagination-sm cusPagination"><li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|', '5378','10','10','0','10','ClientPagingOnChange');"> <i className="fa fa-angle-double-left" /></a></li><li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','0','10','ClientPagingOnChange');"><i className="fa fa-angle-left" /></a></li><li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','0','10','ClientPagingOnChange');">1</a></li>
                <li className="active"><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','1','10','ClientPagingOnChange');">2</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','2','10','ClientPagingOnChange');">3</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','3','10','ClientPagingOnChange');">4</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','4','10','ClientPagingOnChange');">5</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','5','10','ClientPagingOnChange');">6</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','6','10','ClientPagingOnChange');">7</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','7','10','ClientPagingOnChange');">8</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','8','10','ClientPagingOnChange');">9</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','9','10','ClientPagingOnChange');">10</a></li>
                <li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','2','10','ClientPagingOnChange');"><i className="fa fa-angle-right" /></a></li><li><a href="javascript:ClientPagingOnChange('cms','','','unsigned$0$0$1$|title$Hội nghị $0$0$and||sortfield$newbib_dsc$0$1|','5378','10','10','537','10','ClientPagingOnChange');"><i className="fa fa-angle-double-right" /></a></li></ul></div>   <div id="divUtilityBottom" className="tool-bar navbar-right">
                <a href="javascript:ClientExportBib('cms', 'excel');" className="btn btn-default btn-sm" title="Chọn in ấn phẩm"><i className="fa fa-print" /></a>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
export default FromResultSearch
