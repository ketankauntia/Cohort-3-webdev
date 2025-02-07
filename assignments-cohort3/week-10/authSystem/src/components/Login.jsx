import React, { useState } from 'react';

const Login = ({ loggedIn, setLoggedIn, loginData, setLoginData }) => {
  const collectLoginDetails = () => {
    if (loginData.trim() !== '') {
      setLoggedIn(true);
      // setLoginData('');
    }
  };

  return (
    <div className='login-form'>
      <div className='form-group'>
        {!loggedIn ? (
          <div>
            <input
              type='text'
              placeholder='username here..'
              value={loginData}
              onChange={(e) => setLoginData(e.target.value)}
            />
            <button onClick={collectLoginDetails}>Login</button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Login;
