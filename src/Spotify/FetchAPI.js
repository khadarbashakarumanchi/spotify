import React from 'react'
import { useState } from 'react'

export default function FetchAPI() {
  const [data, setData] = useState([])
  const handleGetUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET"
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setData(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const handleCreateUser = () => {
    let newUser = { name: "Venkatesh" };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
      .then(result => {
        let updatedData = [...data, newUser]
        setData(updatedData)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const handleUpdateUser = () => {
    let updatedUser = { name: "Venkatesh" };
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      body: JSON.stringify(updatedUser)
    })
      .then(response => response.json())
      .then(result => {
        let updatedData = [...data];
        let index = updatedData.findIndex(item => item.id === 1);
        updatedData[index] = updatedUser
        setData(updatedData)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const handleDeleteUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(result => {
        let updatedData = [...data];
        let index = updatedData.findIndex(item => item.id === 1);
        updatedData.splice(index, 1)
        setData(updatedData)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <h1>Fetch APIs</h1>
      <button onClick={() => handleGetUsers()}>Get User Data</button>
      <button onClick={() => handleCreateUser()}>Create User</button>
      <button onClick={() => handleUpdateUser()}>Update User</button>
      <button onClick={() => handleDeleteUser()}>Delete User</button>
      <div>
        <ul>
          {data.length > 0 && data.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
