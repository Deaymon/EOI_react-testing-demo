import React, { useState, useEffect } from 'react';
import { getFiveUsers } from './services/userService';
import './App.css';

interface UserInterface {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
          "lat": string,
          "lng": string
      }
  },
  "phone": string,
  "website": string,
  "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
  }
} 

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getInitUsers() {
      let initUsers = await getFiveUsers();
      initUsers = await initUsers.json();
      setUsers(initUsers);
    }
    getInitUsers();
  }, [])

  // useEffect(() => {
  //   console.log(users)
  // }, [users]);

  return (
    <div>
      {users ? users.map((user: UserInterface) => (
        <div key={user.id}>
          <p data-testid='test-user'>{user.name}</p>
        </div>
      ))
      : (
        <div>
          <p>No hay usuarios</p>
        </div>
      )}
    </div>
  );
}

export default App;
