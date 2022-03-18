// Libraries
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Components
import Navbar from '../../Web/components/Navbar';

// Context
import { useContext } from 'react';
import { AuthContext } from '../context/Auth/AuthContext';
import { GlobalProvider } from '../context/global/GlobalContext';

// Pages
import Home from '../../Web/pages/Home';
import Blog from '../../Web/pages/Blog';
import Login from '../../Web/pages/Auth/Login'
import { EditorScreen } from '../../Web/pages/Editor/EditorScreen';
import { ContactScreen } from '../../Web/pages/ContactScreen';
import PostScreen from '../../Web/pages/Blog/PostScreen';



export const AppRouter = () => {

    const { state } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <GlobalProvider>
            <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<PostScreen />} />
                    <Route path="/contact" element={<ContactScreen />} />
                    <Route path="/editor" element={
                        state.logged ? <EditorScreen /> : <Navigate to='/login' />
                    } />
                </Routes>
            </GlobalProvider>
        </BrowserRouter>
    )
}