import React from "react"
import InfomationHome from '../../components/Home/InfomationHome'
import ComponentsDetailImage from '../../components/CategoryVideo/DetailImage'
import BannerDetail from '../../components/BannerDetail/BannerDetail'

interface State {

}
type Props = State
const FormDetailBook = (props: Props) => {
  return (

    <div>
      <BannerDetail></BannerDetail>
      <ComponentsDetailImage></ComponentsDetailImage>
    </div>

  )
}
export default FormDetailBook
