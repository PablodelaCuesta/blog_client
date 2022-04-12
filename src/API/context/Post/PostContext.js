import { createContext, useReducer } from "react";
import { getLatestPosts } from "../../controllers/post.controller";

import { PostReducer } from "./PostReducer";
import { types } from "./types";

const initialState = {
    msg: '',
    count: 0,
    posts: [],
}

export const PostContext = createContext(initialState)

export const PostProvider = ({ children }) => {

    const [state, dispatch] = useReducer(PostReducer, initialState)


    const latestPosts = async () => {
        const resp = await getLatestPosts()

        dispatch({
            type: types.latests,
            payload: resp
        })
    }


    return (
        <PostContext.Provider value={{ state, latestPosts }}>
            {children}
        </PostContext.Provider>
    )
}

