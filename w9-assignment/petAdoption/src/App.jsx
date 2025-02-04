import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import Table from './components/Table';

function App() {
  const [option, setOption] = useState(0);
  const [data, setData] = useState([]);

  function toggleToHeader() {
    return setOption(0);
  }
  function toggleToForm() {
    return setOption(1);
  }

  function handleFormSubmission(newData) {
    setData([...data, newData]);
  }

  return (
    <div>
      <Header />
      <div className='select-option'>
        <button onClick={toggleToHeader}>Header</button>
        <button onClick={toggleToForm}>Form</button>
      </div>
      <div className='body-container'>
        {option === 0 ? <Form onSubmit={handleFormSubmission} /> : <Table data={data} />}
      </div>
    </div>
  );
}

export default App;
