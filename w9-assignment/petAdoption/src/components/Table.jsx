import React from 'react';
import './Table.css';
function Table() {
  return (
    <div className='table-container'>
      <table className='real-table'>
        <tr>
          <th>Pet Name</th>
          <th>Pet Type</th>
          <th>Breed</th>
          <th>Your Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </table>
      <button>Go Back</button>
    </div>
  );
}

export default Table;
