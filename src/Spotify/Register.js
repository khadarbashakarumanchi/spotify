import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify({ username, password }));
    navigate("/auth/login")
  }
  return (
    <div className='container p-5 text-dark'>
      <main className="container text-center form-signin">
        <form onSubmit={handleSubmit}>
          <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="" width="172" height="157" />
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mt-2">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label for="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">Sign Up</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
    </div>
  )
}
