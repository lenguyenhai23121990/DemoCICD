import React from "react"
import BannerHeader from '../../components/Home/Banner/BannerHeader'
import BookNewHome from '../../components/Home/BookNew/BookNewHome'
import CollectionHome from '../../components/Home/CollectionHome'
import FooterHome from '../../components/Home/FooterHome'
import ImageVideoHome from '../../components/Home/ImageVideoHome'
import InfomationHome from '../../components/Home/InfomationHome'
import LinkFooterHome from '../../components/Home/LinkFooterHome'
import MenuTop from '../../components/Home/Menu/MenuTop'
import NewsHome from '../../components/Home/NewHome/NewsHome'
import NewsPaperHome from '../../components/Home/NewsPaperHome'
import TopHeader from '../../components/Home/TopHeader'
import FormSearch from '../../components/Search/FromSearch'


interface State {

}
type Props = State
const ContentHome = (props: Props) => {
  console.log(window.location)
  return (
    <div>
      
      <BannerHeader ></BannerHeader>
      <BookNewHome ></BookNewHome>
      <NewsHome  key={"gggg"}></NewsHome>
      <CollectionHome ></CollectionHome>
      <ImageVideoHome></ImageVideoHome>
      <NewsPaperHome ></NewsPaperHome>
      <InfomationHome ></InfomationHome> 

    </div>

  )
}
export default ContentHome
