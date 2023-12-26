import "./App.css";
import { useState } from 'react'
//import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./musicplayer/Header";
import Album from "./musicplayer/Album";
import Player from "./musicplayer/Player";
import "./musicplayer/style.css";
import { Navigate } from "react-router-dom";
import { Outlet , Link } from "react-router-dom";

export default function MusicPlayer() {
  const [song , setSong] = useState("song1.mp3");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted")
  }
  return (
  <div className = "App">
    <Link to ="/albums/movie1" className = "text-white m-2">Movie 1</Link>
    <Link to ="/albums/movie2" className = "text-white m-2">Movie 2</Link>
    <Outlet/>
    <Header/>
    <Album updateSong = {(updatedSong) => setSong(updatedSong)}/>
    <Player song = {song} />
    {/*<Navigate to = "/about/"></Navigate>*/}
  </div>
  )
}