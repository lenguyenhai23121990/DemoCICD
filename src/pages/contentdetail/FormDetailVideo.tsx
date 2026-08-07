import React from "react"
import InfomationHome from '../../components/Home/InfomationHome'
import ComponentsDetailVideo from '../../components/CategoryVideo/DetailVideo'
import BannerDetail from '../../components/BannerDetail/BannerDetail'

interface State {

}
type Props = State
const FormDetailBook = (props: Props) => {
  return (

    <div>
      <BannerDetail></BannerDetail>
      <ComponentsDetailVideo></ComponentsDetailVideo>
    </div>

  )
}
export default FormDetailBook
