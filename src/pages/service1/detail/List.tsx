import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
interface State {
    user?: string,
    password?: string,
    dispatch?: any,
}
type Props = State
const Service1_ListDetail = (props: Props) => {
    return (
        <React.Fragment>
            Service1: Details
        </React.Fragment>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Service1_ListDetail)