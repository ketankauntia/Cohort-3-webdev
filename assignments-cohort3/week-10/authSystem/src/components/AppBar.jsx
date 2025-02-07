import React from 'react';
import '../App.css';
import { AuthContext } from './AuthSystem';
import { useContext } from 'react';

const AppBar = ({ loggedIn, setLoggedIn, loginData }) => {
  const toggleInOut = () => {
    setLoggedIn((prevLogin) => !loggedIn);
  };
  // console.log(`loginData : ${loginData}`);
  return (
    <div className='app-bar'>
      <h1>Auth System Demo</h1>
      {loggedIn ? (
        <div className='user-section'>
          <div>Welcome, {loginData}!</div>
          <button onClick={toggleInOut}>Logout</button>
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
