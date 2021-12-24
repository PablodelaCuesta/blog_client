import {authActions} from './actions'

export const authReducer = (state, {type, payload}) => {
    switch (type) {
        case authActions.LOGIN:
            return {                
                ...payload
            }
    
        default:
            return state
    }
}