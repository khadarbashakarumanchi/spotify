import React from 'react'
import About from './About';
import MusicPlayer from '../MusicPlayer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import "./Navbar.css";
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './Home';
import Notfound from './Notfound';
import Albumdetails from './Albumdetails';
import FetchAPI from './FetchAPI';
import AxiosAPI from './AxiosAPI';
import Login from './Login';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth/login");
    window.location.reload();
  }
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
        <div>

        <div className="d-flex align-items-center text-end">
          <Link to = "/login" type = "button" className='btn btn-outline-primary me-2'>Login</Link>
          <Link type = "/register" className='btn btn-outline-primary me-2'>Sign Up</Link>
          <div className="dropdown m-2">
            <a href="#" className="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">logout</a></li>
              
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item btn-secondary" onClick={() => handleLogout()}>Sign out</button></li>
            </ul>
          </div>
        </div>
      </div>
      </header>
      <div className='d-flex'>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: 280 }}>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : "nav-link"
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/albums"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : "nav-link"
                }>
                Albums
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : "nav-link"
                }>
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='bg-white text-dark vh-100 container rounded p-2'>
          {/*<About />*/}
          {/*<MusicPlayer />*/}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="albums/:id" element={<Albumdetails />} />
            <Route path="albums" element={<MusicPlayer />}>
              <Route path="movie1" element={<h1>Album 1</h1>} />
              <Route path="movie2" element={<h1>Album 2</h1>} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="fetchapis" element={<FetchAPI />} />
            <Route path="axiosapis" element={<AxiosAPI />} />
             <Route path="login" element={<Login />} /> 
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
