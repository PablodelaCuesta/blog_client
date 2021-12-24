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

// Contexts
import { AuthProvider } from './context/Auth/AuthContext';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/blog" element={ <Blog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </BrowserRouter>
      </AuthProvider>



    </div>
  );
}

export default App;
