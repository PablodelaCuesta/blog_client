// Styles
import './App.css';


// Contexts
import { AuthContext } from './API/context/Auth/AuthContext';

// Routes
import { AppRouter } from './API/routes/AppRouter';

// React libraries
import { useContext, useEffect } from 'react';

function App() {

  const { refreshPageLogin } = useContext(AuthContext)

  useEffect(() => {

    try {
      const auth = JSON.parse(localStorage.getItem('auth'))
      refreshPageLogin(auth)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
