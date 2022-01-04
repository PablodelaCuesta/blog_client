import { Navigate, Routes, Route } from "react-router"
import { AdminScreen } from "../../Web/pages/Admin/AdminScreen"
import { EditorScreen } from "../../Web/pages/Editor/EditorScreen"


export const PrivateRoutes = ({ isAuthenticated }) => {

    const privateRoutes = () => {
        return (
            <Routes>
                <Route path="/admin" element={<AdminScreen />} />
                <Route path="/editor" element={<EditorScreen />} />
            </Routes>
        )
    }

    return (
        <>
            {
                isAuthenticated
                    ? privateRoutes()
                    : <Navigate to='/login' />
            }
        </>
    )
}