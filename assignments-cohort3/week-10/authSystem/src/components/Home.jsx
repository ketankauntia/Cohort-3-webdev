import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Auth System Demo</h1>
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
