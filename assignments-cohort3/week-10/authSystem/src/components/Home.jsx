import React, { useContext } from 'react';
import { AuthContext } from './AuthSystem';
const Home = ({ username: propUsername }) => {
  const contextValue = useContext(AuthContext);

  const displayUsername = contextValue?.username ?? propUsername;
  return (
    <div>
      <h1>Welcome {displayUsername}, to the Auth System Demo</h1>
      <div>
        <p>THis demo showcases two approaches to managing authentication state in React:</p>
        <ul>
          <li>State Lifting</li>
          <li>Context API</li>
        </ul>
        <p>Use the toggle above to switch between the two approaches</p>
      </div>
    </div>
  );
};

export default Home;
