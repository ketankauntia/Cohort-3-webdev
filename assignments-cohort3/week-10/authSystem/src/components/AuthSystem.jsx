import React, { createContext, useState } from 'react';

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
        <AppBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} loginData={loginData} />
        <div>
          <input
            type='checkbox'
            checked={useContextApi}
            onChange={(e) => setUseContextApi(e.target.checked)}
          />
          <span>Use Context API: {useContextApi ? 'On' : 'Off'}</span>
        </div>
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
    </AuthContext.Provider>
  );
};

export default AuthSystem;
