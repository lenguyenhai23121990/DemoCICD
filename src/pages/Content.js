import React from "react"
import { connect } from "react-redux"
import universal from "react-universal-component"
import { goToPage } from "routes"
import { ActionCreators as AuthActions } from "store/auth"
import { ProgressSpinner } from "primereact/progressspinner"
// import { useJwt } from "react-jwt"
// import ENV from "services"

// let time2Logout
// let time2RefreshToken
const Content = ({ page, isLoading, isAuthenticated, goToPage, logout, refreshToken }) => {
    // const user = JSON.parse(localStorage.getItem("user") ?? "{}")
    // const isLoggedIn = user.AccessToken !== undefined
    // const { isExpired, decodedToken } = useJwt(user.AccessToken?.replace(/-/g, "+").replace(/_/g, "/"))
    // if (isLoggedIn && !isExpired) {
    //     try {
    //         if (!time2RefreshToken) {
    //             // Refresh token trước khi timeout 5 phút
    //             let time2expired = new Date(decodedToken.exp * 1000) - new Date() - 1000 * 60
    //             // console.log(`Refresh token after ${time2expired / 1000 / 60} minutes.`)
    //             time2RefreshToken = setTimeout(() => {
    //                 // console.log('System refresh token')
    //                 refreshToken()
    //             }, time2expired)
    //         }
    //     } catch { }
    //     try {
    //         if (time2Logout) {
    //             // console.log('Clear exists timeout for logout')
    //             clearTimeout(time2Logout)
    //         }
    //         // console.log(`Logout after ${ENV.TIMEOUT} minutes if no action.`)
    //         time2Logout = setTimeout(() => {
    //             // console.log('Expired session, system logout.')
    //             logout()
    //             alert("Phiên làm việc đã kết thúc, hãy đăng nhập lại để tiếp tục sử dụng hệ thống.")
    //         }, ENV.TIMEOUT * 1000 * 60)
    //     } catch { }
    // } else if (isLoggedIn) {
    //     logout()
    //     alert("Phiên làm việc đã kết thúc, hãy đăng nhập lại để tiếp tục sử dụng hệ thống.")
    // }
    // console.log('Content')
    return <UniversalComponent page={page} isLoading={isLoading} />
}

const UniversalComponent = universal(
    (props) => {
        // console.log('universal',props.page)
        return import(`./${props.page}`)
    },
    {
        minDelay: 100,
        chunkName: (props) => props.page,
        loading: () => <ProgressSpinner />,
        //error: () => <div className='notFound'>Page Not Found</div>
        error: () => <div className="notFound"></div>,
    }
)

const mapState = ({ page, ...state }) => ({
    page,
    isLoading: state.ContextState.loading,
    isAuthenticated: state.AuthState.IsLoggedIn,
})
const mapDispatchToProps = {
    logout: AuthActions.Logout,
    refreshToken: AuthActions.Refresh,
    goToPage: goToPage,
}

export default connect(mapState, mapDispatchToProps)(Content)
