import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
interface State {
    user?: string,
    password?: string,
    dispatch?: any,
}
type Props = State
const Home = (props: Props) => {
    return (
        <React.Fragment>
            Home page
        </React.Fragment>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)