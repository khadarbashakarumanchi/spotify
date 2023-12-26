import React from 'react';
import "./style.css";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
export default function Item(props) {
  //const {src}=props
  return (
    <div className='m-3 p-3'>
        <img src = {props.src} alt = "main-poster" height={300} width={300} className = "poster"/>

        <div onClick = {() => props.updateSong(props.song) }>
        <PlayCircleFilledIcon color = "primary"/>

        </div>
        
        
    </div>
  )
}

