import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../Web/pages/Auth/Login'
import Blog from '../../Web/pages/Blog'
import PostScreen from '../../Web/pages/Blog/PostScreen'
import { ContactScreen } from '../../Web/pages/ContactScreen'
import Home from '../../Web/pages/Home'
import { PostProvider } from '../context/Post/PostContext'


export const PublicRoutes = () => {

    return (
        <PostProvider>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="blog" exact element={<Blog />} />
                <Route path="blog/:id" element={<PostScreen />} />
                <Route path="/contact" element={<ContactScreen />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </PostProvider>
    )
}