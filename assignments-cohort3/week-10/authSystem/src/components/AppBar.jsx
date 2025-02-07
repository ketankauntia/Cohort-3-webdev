import React from 'react';
import '../App.css';
import { useContext } from 'react';
import { AuthContext } from './AuthSystem';

const AppBar = ({ username: propUsername, isLoggedIn: propIsLoggedIn, logout: propLogout }) => {
  const contextValue = useContext(AuthContext); // accessing context values

  const displayUsername = contextValue?.username ?? propUsername;
  const displayIsLoggedIn = contextValue?.isLoggedIn ?? propIsLoggedIn;
  const handleLogout = contextValue?.logout ?? propLogout;

  // const toggleInOut = () => {
  //   setLoggedIn((prevLogin) => !loggedIn);
  // };
  // console.log(`loginData : ${loginData}`);
  return (
    <div className='app-bar'>
      <h1>Auth System Demo</h1>
      {displayIsLoggedIn ? (
        <div className='user-section'>
          <div>Welcome, {displayUsername}!</div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className='user-section'>
          <button>Login First</button>
        </div>
      )}
    </div>
  );
};

export default AppBar;
