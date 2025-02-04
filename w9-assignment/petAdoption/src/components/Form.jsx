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
  }

  return (
    <form className='form-container'>
      <div>Pet Name</div>
      <input placeholder='Pet Name' required />
      <div>Pet Type</div>
      <select>
        <option>German Shephar</option>
        <option>Military</option>
        <option>Doberman</option>
        <option>Husky</option>
        <option>Bulldog</option>
      </select>
      <div>Breed</div>
      <input placeholder='Breed' required />
      <div>Your Name</div>
      <input placeholder='Your Name' required />
      <div>Email</div>
      <input placeholder='Email' required />
      <div>Phone Number</div>
      <input placeholder='Phone Number' required />
      <button onClick={submitFormData} type='submit'>
        Submit
      </button>
    </form>
  );
}

export default Form;
