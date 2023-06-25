import React from "react"
import InfomationHome from '../../components/Home/InfomationHome'
import ComponentsDetailNews from '../../components/News/DetailNews'
import BannerDetail from '../../components/DetailBook/BannerDetail'

interface State {

}
type Props = State
const FromDetailNews = (props: Props) => {
  return (

    <div>
      <BannerDetail></BannerDetail>
      <ComponentsDetailNews></ComponentsDetailNews>
    </div>

  )
}
export default FromDetailNews
