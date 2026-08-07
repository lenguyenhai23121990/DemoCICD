import React from "react"
import InfomationHome from '../../components/Home/InfomationHome'
import ComponentsCategoryAudio from '../../components/CategoryVideo/CategoryAudio'
import BannerDetail from '../../components/BannerDetail/BannerDetail'

interface State {

}
type Props = State
const FromCategoryAudio = (props: Props) => {
  return (

    <div>
      <BannerDetail></BannerDetail>
      <ComponentsCategoryAudio></ComponentsCategoryAudio>
    </div>

  )
}
export default FromCategoryAudio
