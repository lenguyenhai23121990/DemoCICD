import React from "react"
import InfomationHome from '../../components/Home/InfomationHome'
import ComponentsDetailBook from '../../components/DetailBook/DetailBook'
import BannerDetail from '../../components/BannerDetail/BannerDetail'

interface State {

}
type Props = State
const FormDetailBook = (props: Props) => {
  return (

    <div>
      <BannerDetail></BannerDetail>
      <ComponentsDetailBook></ComponentsDetailBook>
    </div>

  )
}
export default FormDetailBook
