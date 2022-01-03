
// Libraries
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from '../pages/Home'
import Login from '../pages/Auth/Login'
import Blog from '../pages/Blog';
import PostScreen from '../pages/Blog/PostScreen'
import { ContactScreen } from '../pages/ContactScreen';
import { PostProvider } from '../context/Post/PostContext';



export const PublicRoutes = ({ children }) => {

    return (
        <div>
            <PostProvider>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="blog" exact element={<Blog />} />

                    <Route path="blog/:id" element={<PostScreen />} />
                </Routes>
            </PostProvider>
            <Routes>
                <Route path="/contact" element={<ContactScreen />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}