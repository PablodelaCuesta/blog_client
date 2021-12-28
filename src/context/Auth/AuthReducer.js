import {authActions} from './actions'

export const authReducer = (state, {type, payload}) => {
    switch (type) {
        case authActions.LOGIN:
            return {                
                ...payload,
                logged: true
            }
        case authActions.LOGOUT:
            return {
                ...payload,
                logged: false
            }
        default:
            return state
    }
}