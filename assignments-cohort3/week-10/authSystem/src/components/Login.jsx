import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthSystem';

const Login = ({ onLogin: propOnLogin }) => {
  const [username, setUsername] = useState('');
  const contextValue = useContext(AuthContext);

  // Extract login function and authentication state from context
  const { login, isAuthenticated } = contextValue || {};

  const handleLogin = () => {
    if (login) {
      login(username);
    } else if (propOnLogin) {
      propOnLogin(username);
    }
    setUsername('');
  };

  return (
    <div className='login-form'>
      <div className='form-group'>
        {!isAuthenticated ? (
          <div>
            <input
              type='text'
              placeholder='username here..'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <p>You are logged in!</p>
        )}
      </div>
    </div>
  );
};

export default Login;
