import { types } from "./types";

export const PostReducer = (state, { type, payload}) => {
    switch (type) {
        case types.latests:
            return {
                ...payload
            }
    
        default:
            return state
    }
}