import React, { useState, useEffect } from 'react';
import { getFiveUsers, createNewUser } from './services/userService';
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
    getInitUsers()
  }, [])
  
  return (
    <main>
      {users.length ? <ul>
        {users.map((user: UserInterface) => (
        <li key={user.id}>
          <ul data-testid='test-user'>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.username}</li>
          </ul>
        </li>))}
      </ul>
      : (
        <div>
          <p>No hay usuarios</p>
        </div>
      )}
      <button onClick={e => createNewUser(users.length + 1)}></button>
    </main>
  );
}

export default App;
