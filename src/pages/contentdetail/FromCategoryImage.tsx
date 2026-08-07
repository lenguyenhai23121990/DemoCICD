import React from "react"
import InfomationHome from '../../components/Home/InfomationHome'
import ComponentsCategoryImage from '../../components/CategoryVideo/CategoryImages'
import BannerDetail from '../../components/BannerDetail/BannerDetail'

interface State {

}
type Props = State
const FromCategoryVideo = (props: Props) => {
  return (

    <div>
      <BannerDetail></BannerDetail>
      <ComponentsCategoryImage></ComponentsCategoryImage>
    </div>

  )
}
export default FromCategoryVideo
