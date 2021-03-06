import {authActions} from './actions'

export const authReducer = (state, {type, payload}) => {
    switch (type) {
        case authActions.LOGIN:
            return {                
                ...payload
            }
        case authActions.LOGOUT:
            return {
                ...payload
            }
        default:
            return state
    }
}