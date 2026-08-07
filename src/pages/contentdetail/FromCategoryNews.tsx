import React from "react"
import InfomationHome from '../../components/Home/InfomationHome'
import ComponentsCategoryNews from '../../components/News/CategoryNews/CategoryNews'
import BannerDetail from '../../components/BannerDetail/BannerDetail'

interface State {

}
type Props = State
const FromCategoryNews = (props: Props) => {
  return (

    <div>
      <BannerDetail></BannerDetail>
      <ComponentsCategoryNews></ComponentsCategoryNews>
    </div>

  )
}
export default FromCategoryNews
