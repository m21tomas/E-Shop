import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 
 function UsernameComponent({ setToken }) {

  const [username, setUserName] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username
    });
    setToken(token);
  }

  return(
    <form className="d-flex mx-auto" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="text" placeholder="Username" onChange={e => setUserName(e.target.value)} />
        <button className="btn btn-outline-secondary" type="submit">Enter</button>
    </form>
  )
}

export default UsernameComponent;
