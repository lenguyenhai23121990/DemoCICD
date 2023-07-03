import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { goToPage, goToPageExt } from 'routes'
import { Button } from 'primereact/button';
interface State {
    user?: string,
    password?: string,
    dispatch?: any,
    goToPage: any,
    goToPageExt: any
}
type Props = State
const Service2_ListMaster = (props: Props) => {
    return (
        <React.Fragment>
            Service2: Masters
            <Button className="ed-form-button p-button-raised p-button-text" type="button" label="Quay lại" onClick={()=> { props.goToPage("service2/readers") }} />
        </React.Fragment>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
    }
}
const mapDispatchToProps = {
    goToPage: goToPage,
    goToPageExt: goToPageExt,
}
// const mapDispatchToProps = {
// }
export default connect(mapStateToProps, mapDispatchToProps)(Service2_ListMaster)