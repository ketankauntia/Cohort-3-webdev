import React, { useRef, useState } from 'react';
import './Form.css';
function Form() {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('German Shepherd');
  const [petBreed, setPetBreed] = useState('');
  const [yourName, setYourName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function submitFormData(e) {
    e.preventDefault();
    // console.log(petNameRef.current.value);

    const newPetData = { petName, petType, petBreed, yourName, email, phoneNumber };
    console.log(newPetData);
  }

  return (
    <form className='form-container' onSubmit={submitFormData}>
      <div>Pet Name</div>
      <input
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
        placeholder='Pet Name'
        required
      />
      <div>Pet Type</div>
      <select value={petType} onChange={(e) => setPetType(e.target.value)}>
        <option>German Shephar</option>
        <option>Military</option>
        <option>Doberman</option>
        <option>Husky</option>
        <option>Bulldog</option>
      </select>
      <div>Breed</div>
      <input
        value={petBreed}
        onChange={(e) => setPetBreed(e.target.value)}
        placeholder='Breed'
        required
      />
      <div>Your Name</div>
      <input
        value={yourName}
        onChange={(e) => setYourName(e.target.value)}
        placeholder='Your Name'
        required
      />
      <div>Email</div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        required
      />
      <div>Phone Number</div>
      <input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder='Phone Number'
        required
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Form;
