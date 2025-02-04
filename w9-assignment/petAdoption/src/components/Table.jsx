import './Table.css';

function Table({ petTableData, handleGoBack }) {
  return (
    <div className='table-container'>
      <table className='real-table'>
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed</th>
            <th>Your Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {petTableData.map((pet, index) => (
            <PetComponent key={index} pet={pet} />
          ))}
        </tbody>
      </table>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

function PetComponent({ pet }) {
  return (
    <tr>
      <td>{pet.petName}</td>
      <td>{pet.petType}</td>
      <td>{pet.petBreed}</td>
      <td>{pet.yourName}</td>
      <td>{pet.email}</td>
      <td>{pet.phoneNumber}</td>
    </tr>
  );
}

export default Table;
