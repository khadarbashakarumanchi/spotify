import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Player(props) {
  console.log(props)
  return (
    <div className='musicplayer'>
    <AudioPlayer
    autoPlay
    src  = {`assets/music/${props.song}`}
    onPlay={e => console.log("onPlay")}
    // other props here= 
  />
    </div>
  )
}
