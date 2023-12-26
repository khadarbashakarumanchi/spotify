import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function TopNavbar() {
  return (
    <div className="container-fluid bg-dark text-white">
      <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
        <div className='d-flex'>
          <a href="/" className="d-flex align-items-center mb-2 mb-md-0 text-dark text-decoration-none">
            <h1 className='text-white'>Spotify 4.0</h1>
          </a>

          <ul className="nav text-white col-md-auto mb-2 mb-md-0 ml-5">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive ? { color: 'blue' } : { color: 'white' }
                } className="nav-link px-2">
                Home
              </NavLink></li>
            <li><NavLink
              to="/albums"
              style={({ isActive }) =>
                isActive ? { color: 'blue' } : { color: 'white' }
              }
              className="nav-link px-2">
              Albums
            </NavLink></li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) =>
                  isActive ? { color: 'blue' } : { color: 'white' }
                }
                className="nav-link px-2">
                About
              </NavLink></li>
            <li>
              <NavLink
                to="/fetchapis"
                style={({ isActive }) =>
                  isActive ? { color: 'blue' } : { color: 'white' }
                }
                className="nav-link px-2">
                Fetch
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/axiosapis"
                style={({ isActive }) =>
                  isActive ? { color: 'blue' } : { color: 'white' }
                }
                className="nav-link px-2">
                Axios
              </NavLink></li>
          </ul>
        </div>

        <div className="d-flex align-items-center text-end">
          <NavLink to="/auth/login" type="button" className={({ isActive }) => isActive ? 'btn btn-primary me-2' : 'btn btn-outline-primary me-2'}>Login</NavLink>
          <NavLink to="/auth/register" type="button" className={({ isActive }) => isActive ? 'btn btn-primary me-2' : 'btn btn-outline-primary me-2'}>Sign-up</NavLink>
        </div>
      </header>
    </div>
  )
}
