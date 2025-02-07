import React, { createContext, useState } from 'react';
import AppBar from './AppBar';
import Home from './Home';
import Login from './Login';

export const AuthContext = createContext(undefined);

const AuthSystem = () => {
  const [useContextApi, setUseContextApi] = useState(false);

  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (newUserName) => {
    setUsername(newUserName);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUsername('');
    setIsLoggedIn(false);
  };

  const contextValue = useContextApi ? { username, isLoggedIn, login, logout } : undefined;

  return (
    <AuthContext.Provider value={contextValue}>
      <div>
        {/* <AppBar username={username} isLoggedIn={isLoggedIn} logout={logout} /> */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '1rem',
            backgroundColor: '#f0f0f0',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type='checkbox'
              checked={useContextApi}
              onChange={(e) => setUseContextApi(e.target.checked)}
            />
            <span>Use Context API: {useContextApi ? 'On' : 'Off'}</span>
          </div>
        </div>
        {isLoggedIn ? <Home username={username} /> : <Login onLogin={login} />}
      </div>
    </AuthContext.Provider>
  );
};

export default AuthSystem;
