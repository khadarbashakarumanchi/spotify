import React from 'react';
import Item from "./Item.js"
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import { Grid , Container , Card } from '@mui/material';

export default function Album(props) {
  return (
<div className = "Container">
<Container maxWidth = "xm"></Container>
<Grid container spacing={2}>
 
  <Grid item xs={12}>
  <Card variant="outlined">
    <Item src = {image1} song = "song1.mp3" updateSong = {(song) => props.updateSong(song)}></Item>
  </Card>
  </Grid>
  <Grid item xs={4}>
  <Card variant="outlined">
    <Item src={image2} song = "song2.mp3" updateSong = {(song) => props.updateSong(song)}></Item>
  </Card>
  </Grid>
  <Grid item xs={4}>
  <Card variant="outlined">
    <Item src = {image3} song = "song3.mp3" updateSong = {(song) => props.updateSong(song)}></Item>
  </Card>
  </Grid>
  <Grid item xs={4}>
  <Card variant="outlined">
    <Item src = {image4} song = "song4.mp3" updateSong = {(song) => props.updateSong(song)}></Item>
    </Card>
  </Grid>
</Grid>
</div>
  )
}
