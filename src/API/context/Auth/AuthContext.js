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
       
        const res = await axios.post("http://localhost:8080/api/auth/login", auth)

        const {jwt, email, name } = res.data
        const storageAuth = JSON.stringify({
            "jwt": jwt,
            "email": email,
            "name": name
        })

        // Local persist
        localStorage.setItem('auth', storageAuth)
        
        dispatch({
            type: authActions.LOGIN,
            payload: { jwt, email, name }
        })
    }

    const refreshPageLogin = (auth) => {
        dispatch({
            type: authActions.LOGIN,
            payload: auth
        })
    }

    const logout = () => {
        localStorage.removeItem('auth')
        dispatch({
            type: authActions.LOGOUT,
            payload: {}
        })
    }

    return (
        <AuthContext.Provider value={{ state, login, refreshPageLogin, logout }}>
            { children }
        </AuthContext.Provider>
    )
}