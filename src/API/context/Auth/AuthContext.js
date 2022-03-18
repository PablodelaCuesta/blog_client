import axios from "axios";
import { createContext, useReducer } from "react";

import { authReducer } from "./AuthReducer";
import { authActions } from "./actions";
import { BASE_API } from "../../../Core/constants/connections";

const initialState = {
    email: '',
    name: '',
    jwt: '',
    logged: false
}

export const AuthContext = createContext(initialState)

export const AuthProvider = ({ children }) => {

    const auth = JSON.parse(localStorage.getItem('auth'))
    const [state, dispatch] = useReducer(authReducer, auth === null ? initialState : auth)

    const login = async (auth) => {
        try {
            const res = await axios.post(BASE_API + "/auth/login", auth)

            const { jwt, email, name } = res.data
            const storageAuth = JSON.stringify({
                jwt: jwt,
                email: email,
                name: name,
                logged: true
            })

            // FIXME: Changed that. Keep something in local storage can be an vulnerability

            // Local persist
            localStorage.setItem('auth', storageAuth)

            dispatch({
                type: authActions.LOGIN,
                payload: { jwt, email, name, logged: true }
            })

            return true
        } catch (error) {
            return false
        }
    }

    const refreshPageLogin = (auth) => {
        dispatch({
            type: authActions.LOGIN,
            payload: auth
        })
    }

    const logout = () => {

        // Remove local storage
        localStorage.removeItem('auth')

        dispatch({
            type: authActions.LOGOUT,
            payload: {}
        })
    }

    return (
        <AuthContext.Provider value={{ state, login, refreshPageLogin, logout }}>
            {children}
        </AuthContext.Provider>
    )
}