import React from "react"
import BannerHeader from '../../components/Home/BannerHeader'
import BookNewHome from '../../components/Home/BookNewHome'
import CollectionHome from '../../components/Home/CollectionHome'
import FooterHome from '../../components/Home/FooterHome'
import ImageVideoHome from '../../components/Home/ImageVideoHome'
import InfomationHome from '../../components/Home/InfomationHome'
import LinkFooterHome from '../../components/Home/LinkFooterHome'
import MenuTop from '../../components/Home/MenuTop'
import NewsHome from '../../components/Home/NewsHome'
import NewsPaperHome from '../../components/Home/NewsPaperHome'
import TopHeader from '../../components/Home/TopHeader'
import FormSearch from '../../components/Search/FromSearch'


interface State {

}
type Props = State
const ContentHome = (props: Props) => {
  console.log(123)
  return (

    <div>
      
      <BannerHeader ></BannerHeader>
      <BookNewHome ></BookNewHome>
      <NewsHome></NewsHome>
      <CollectionHome ></CollectionHome>
      <ImageVideoHome></ImageVideoHome>
      <NewsPaperHome ></NewsPaperHome>
      <InfomationHome ></InfomationHome> 
    </div>

  )
}
export default ContentHome
