import { useContext } from "react"
import { Navigate } from "react-router"
import { AuthContext } from "../context/Auth/AuthContext"


export const PrivateRoutes = ({ children }) => {
    
    const { state } = useContext(AuthContext)

    return state.logged ? children : <Navigate to="/" />
}