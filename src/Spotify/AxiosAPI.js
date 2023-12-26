import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function AxiosAPI() {
  const [data, setData] = useState([])
  const handleGetUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(result => {
        console.log(result)
        setData(result.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const handleCreateUser = () => {
    let newUser = { name: "Venkatesh" };
    axios.post("https://jsonplaceholder.typicode.com/users", {
      data: JSON.stringify(newUser)
    })
      .then(result => {
        let updatedData = [...data, newUser]
        setData(updatedData)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const handleUpdateUser = () => {
    let updatedUser = { name: "Venkatesh", id: 1 };
    axios.put("https://jsonplaceholder.typicode.com/users/1", {
      data: JSON.stringify(updatedUser)
    })
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
    axios.delete("https://jsonplaceholder.typicode.com/users/1")
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
      <h1>Axios APIs</h1>
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
