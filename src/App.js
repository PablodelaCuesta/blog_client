// Styles
import './App.css';


// Contexts
import { AuthContext } from './context/Auth/AuthContext';
import { useContext, useEffect } from 'react';
import { AppRouter } from './routes/AppRouter';

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
