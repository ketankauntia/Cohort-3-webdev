import { useState, useEffect } from 'react';
import './RandomUser.css';

const RandomUser = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  //
  const fetchUserData = async () => {
    setLoading(true);
    const dataFromApi = await fetch('https://randomuser.me/api/').then((data) => data.json());

    const personData = dataFromApi.results[0];
    console.log(personData);

    const userName =
      personData.name.title + ' ' + personData.name.first + ' ' + personData.name.last;
    const userImage = personData.picture.medium;

    const newUserData = { name: userName, image: userImage };

    setUserData((prevUserData) => [...prevUserData, newUserData]);
    setLoading(false);
    console.log(`New user Data : ${newUserData}`);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className='main-container'>
      <div className='user-container'>
        {userData.map((user, index) => {
          return (
            <div className='user-card' key={index}>
              <img src={user.image}></img>
              <div className='card-name'>{user.name}</div>
            </div>
          );
        })}
        {loading ? <div>loading....</div> : ''}
      </div>
      <button onClick={fetchUserData}>Fetch user data</button>
    </div>
  );
};

export default RandomUser;
