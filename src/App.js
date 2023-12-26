import React, { Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Spotify/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './Spotify/Login'
import Register from './Spotify/Register';
//import Auth from './Spotify/Auth';
const Auth = React.lazy(() => import('./Spotify/Auth'));


export default function App() {
  const user = localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")) : null;
  return (
    <div>
      {user !== null ? <Navbar /> :
        <Routes>
          <Route path="auth" element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Auth />
            </Suspense>}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>}
    </div>
  )
}
