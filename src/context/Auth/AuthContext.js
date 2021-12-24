import axios from "axios";
import { createContext, useReducer } from "react";

import {authReducer} from "./AuthReducer";
import { authActions } from "./actions";

const initialState = {
    email: '',
    name: '',
    jwt: ''
}

export const AuthContext = createContext(initialState)

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const login = async (auth) => {

        console.log(auth)
        
        const res = await axios.post("http://localhost:8080/api/auth/login", auth)

        console.log(res.data)

        const {jwt, email, name } = res.data
        
        dispatch({
            type: authActions.LOGIN,
            payload: { jwt, email, name }
        })
    }

    return (
        <AuthContext.Provider value={{ state, login }}>
            { children }
        </AuthContext.Provider>
    )
}