import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Styles
import './App.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Blog from './pages/Blog';
import PostScreen from './pages/Blog/PostScreen'

// Contexts
import { AuthContext } from './context/Auth/AuthContext';
import { useContext, useEffect } from 'react';

function App() {

  const { refreshPageLogin } = useContext(AuthContext)
  
  useEffect( () => {

    try {

      const auth = JSON.parse(localStorage.getItem('auth'))
      refreshPageLogin(auth)

    } catch (error) {
      console.log(error)
    }

  }, [])

  return (
    <div className="App">

        <BrowserRouter>
          <Navbar />
          <div >
            <main>
              <Routes>
                <Route path="/" exact element={<Home />} />

                <Route path="/blog" exact element={ <Blog />} /> 
                <Route path="/blog/:id" element={ <PostScreen />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
            
          </div>
        </BrowserRouter>

    </div>
  );
}

export default App;
