import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import Table from './components/Table';

function App() {
  const [option, setOption] = useState(0);
  const [data, setData] = useState([]);
  const [petTableData, setPetTableData] = useState([]);

  function toggleToForm() {
    return setOption(0);
  }
  function toggleToTable() {
    return setOption(1);
  }

  function handleFormSubmission(newData) {
    setData([...data, newData]);
  }

  function handleGoBack() {
    setOption(0);
  }

  return (
    <div>
      <Header />
      <div className='select-option'>
        <button onClick={toggleToForm}>Fill Form</button>
        <button onClick={toggleToTable}>check Table</button>
      </div>
      <div className='body-container'>
        {option === 0 ? (
          <Form setPetTableData={setPetTableData} onSubmit={handleFormSubmission} />
        ) : (
          <Table petTableData={petTableData} handleGoBack={handleGoBack} data={data} />
        )}
      </div>
    </div>
  );
}

export default App;
