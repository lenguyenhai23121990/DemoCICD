import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
interface State {
    user?: string,
    password?: string,
    dispatch?: any,
}
type Props = State
const Service2_ListMaster = (props: Props) => {
    return (
        <React.Fragment>
            Service2: Masters
        </React.Fragment>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Service2_ListMaster)