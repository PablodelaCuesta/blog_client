import { createContext, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";
import { types } from "./types";

// API
import { getLatestPosts } from "../../controllers/post.controller";

// State definition
const initialState = {
    msg: '',
    language: types.language.ES,
    count: 0,
    posts: [],
}
export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {

    const [globalState, dispatch] = useReducer(GlobalReducer, initialState)

    // Language
    const changeLanguage = ( language ) => {

        globalState.language = language

        dispatch({
            type: types.language.change,
            payload: { language: language, ...globalState }
        })
    }

    // Post
    const latestPosts = async () => {
        const resp = await getLatestPosts()
        console.log('respuesta: ', resp);
        globalState.posts = resp.docs

        dispatch({
            type: types.latestsPost,
            payload: { ...globalState }
        })
    }


    return (
        <GlobalContext.Provider value={{
            globalState,
            latestPosts,
            changeLanguage
        }}>
            {children}
        </GlobalContext.Provider>
    )
}