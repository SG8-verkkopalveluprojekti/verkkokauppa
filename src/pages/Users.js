import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => {
        setUsers(response.data); 
      })
      .catch(error => console.error('Error:', error));
  }, []); 

  return (
    <div className='text-center'>
      <h2 style={{marginTop:"10px",marginBottom:"10px"}}>Käyttäjälista</h2>
      <ul>
        {users.map(user => (
          <li key={user.username}>
            Etunimi: {user.first_name}<br></br>Sukunimi: {user.last_name}<br></br> Käyttäjänimi:  {user.username} <br></br><hr></hr>
          </li>
        ))}
      </ul>
      <Button href="/Admin">Takaisin tuotteiden lisäykseen</Button>
    </div>
  );
};

export default Users;