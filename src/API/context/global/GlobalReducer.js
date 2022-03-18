import { types } from './types'

export const GlobalReducer = ( state, { type, payload }) => {
    switch (type) {
        case types.latestsPost:
            return {
                ...payload
            }
        case types.language.change:
            return {
                ...payload
            }
    
        default:
            return state;
    }
}