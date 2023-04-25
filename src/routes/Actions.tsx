import { NOT_FOUND } from 'redux-first-router'

export const goToPage = (type: string, params?: any, action?: any) => {
    console.log(type)
    return({
        type,
        payload: action !== undefined? {params, action}: params && {params}
    })
}

export const goToPageExt = (type: string, params?: any) => {
    console.log(type)
    return({
        type,
        payload: params
    })
}

export const goHome = () => ({
    type: 'Home'
})

export const notFound = () => ({
    type: NOT_FOUND
})