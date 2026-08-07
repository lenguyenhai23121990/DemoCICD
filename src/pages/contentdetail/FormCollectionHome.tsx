import React from "react"
import InfomationHome from '../../components/Home/InfomationHome'
import ComponentsCollectionHome from '../../components/Collection/CollectionHome'
import BannerDetail from '../../components/BannerDetail/BannerDetail'

interface State {

}
type Props = State
const FormCollectionHome = (props: Props) => {
  return (

    <div>
      <BannerDetail></BannerDetail>
      <ComponentsCollectionHome></ComponentsCollectionHome>
    </div>

  )
}
export default FormCollectionHome
