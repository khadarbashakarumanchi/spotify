import React from 'react';
import { useParams } from 'react-router-dom';

export default function Albumdetails() {
    const id = useParams();
    const albums = [
        {
          id:1,
          name:"movie1",
          song:"song1.mp3"
        },
        {
          id:1,
          name:"movie2",
          song:"song2.mp3"
        },
        {
          id:1,
          name:"movie3",
          song:"song3.mp3"
        }
      ];
  return (
    <div>Albumdetails {id} and {albums.filter((item) => item.id == id).length > 0 &&
    albums.filter((item)=> item.id == id)[0].name}</div>
  )
}
