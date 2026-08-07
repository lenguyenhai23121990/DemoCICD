import React from "react"
import InfomationHome from '../../components/Home/InfomationHome'
import ComponentsCategoryVideo from '../../components/CategoryVideo/CategoryVideos'
import BannerDetail from '../../components/BannerDetail/BannerDetail'

interface State {

}
type Props = State
const FromCategoryVideo = (props: Props) => {
  return (

    <div>
      <BannerDetail></BannerDetail>
      <ComponentsCategoryVideo></ComponentsCategoryVideo>
    </div>

  )
}
export default FromCategoryVideo
