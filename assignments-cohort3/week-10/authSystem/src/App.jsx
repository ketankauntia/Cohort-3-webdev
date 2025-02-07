import { useState } from 'react';
import './Auth.css';
import AppBar from './components/AppBar';
import AuthSystem from './components/AuthSystem';
import Home from './components/Home';
import Login from './components/Login';

// If you use State Lifting,
//      App.js manages login state (loggedIn).

// If you use Context API,
//      AuthSystem.jsx should manage login state (isLoggedIn).

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState('');

  return (
    <div className='app-container'>
      <AppBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} loginData={loginData} />
      <AuthSystem />
      {loggedIn ? (
        <Home />
      ) : (
        <Login
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          loginData={loginData}
          setLoginData={setLoginData}
        />
      )}
    </div>
  );
}

export default App;
