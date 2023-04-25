const user = (state = null, action: any = {}) => {
    switch (action.type) {
        case 'SET_USER_ROLES':
            return {
                roles: action.payload
            }
        default:
            return state
    }

}
export default user

// TRY THIS: change 'member' to 'admin' to access private area (see src/routesMap.js)