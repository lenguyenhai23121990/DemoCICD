import React from "react"
import HomeModulImage from "../../assets/Image/HomeModulImage.png";
import HomeModulVideo from "../../assets/Image/HomeModulVideo.png";

interface State {

}
type Props = State
const ImageVideoHome = (props: Props) => {

    return (
        
        <section>
        <div className="containernews">
            <div className="col-sm-12" id="maincollLoading2"><section className="homeTopBlock">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h3 className="header1"><a href="http://10.161.10.104:8886/pages/cms/collection-hinh-anh-video-id-3874.html">Ảnh</a><hr id="hrcolor" /></h3>
                        <div className="divImageLeft">
                            <div id="divImager" className="sideWrapIn">
                                <a href="http://10.161.10.104:8886/pages/cms/collection-hinh-anh-video-id-3874.html"> <img src={HomeModulImage} /> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 divVideoRight">
                        <h3 className="header1"><a href="http://10.161.10.104:8886/pages/cms/collection-hinh-anh-video-id-5287.html">Video</a><hr id="hrcolor" /></h3>
                        <div className="divVideoRight">
                            <div id="divVideoIntroductBook" className="sideWrapIn">
                                <a href="/pages/cms/collection-hinh-anh-video-id-5287.html"><img src={HomeModulVideo} /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    </section>
    )
}
export default ImageVideoHome
