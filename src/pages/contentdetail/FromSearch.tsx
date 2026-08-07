import React from "react"
import InfomationHome from '../../components/Home/InfomationHome'
import ComponentsModuleSearch from '../../components/Search/FromSearch'
import BannerDetail from '../../components/BannerDetail/BannerDetail'
import ComponentsModuleResultSearch from '../../components/Search/FromResultSearch'
interface State {

}
type Props = State
const FromSearch = (props: Props) => {
  return (

    <div>
      <BannerDetail></BannerDetail>
      <ComponentsModuleSearch></ComponentsModuleSearch>
      {/* <ComponentsModuleResultSearch></ComponentsModuleResultSearch> */}
    </div>

  )
}
export default FromSearch
