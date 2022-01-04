// Libraries
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Routes
import { PrivateRoutes } from './PrivateRoutes.routes';
import { PublicRoutes } from './PublicRoutes.routes';

// Components
import Navbar from '../../Web/components/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth/AuthContext';




export const AppRouter = () => {

    const { state } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <Navbar />
            <div >
                <main>
                    <PublicRoutes />
                    <PrivateRoutes isAuthenticated={state.logged} />
                </main>

            </div>
        </BrowserRouter>
    )
}