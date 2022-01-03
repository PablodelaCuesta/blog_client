// Libraries
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Routes
import { PrivateRoutes } from './PrivateRoutes.routes';
import { PublicRoutes } from './PublicRoutes.routes';

// Components
import Navbar from '../../Web/components/Navbar';




export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div >
                <main>
                    <Routes>
                        <Route path="/*" element={
                            <PublicRoutes />
                        } />

                        <Route path="/editor" element={
                            <PrivateRoutes>
                                {/* <Route path="/editor" element={} />
                                <Route path="/editor/:id" element={} />
                                <Route path="/admin" element={} /> */}
                            </PrivateRoutes>
                        } />



                        {/* <Route path="/register" element={<Register />} /> */}
                    </Routes>
                </main>

            </div>
        </BrowserRouter>
    )
}