import React from "react"
import InfomationHome from '../../components/Home/InfomationHome'
import ComponentsCollectionImage from '../../components/Collection/CollectionImage'
import BannerDetail from '../../components/BannerDetail/BannerDetail'

interface State {

}
type Props = State
const FormCollectionHome = (props: Props) => {
  return (

    <div>
      <BannerDetail></BannerDetail>
      <ComponentsCollectionImage></ComponentsCollectionImage>
    </div>

  )
}
export default FormCollectionHome
