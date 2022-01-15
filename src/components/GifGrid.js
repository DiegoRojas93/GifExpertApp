import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  useEffect(() => getGifs() , [])

  const getGifs = async () => {

    const API = `HTTPS://api.giphy.com/v1/gifs/search?api_key=uo3IQaZkeumFKnnktpPMBhhVxxf9lHdC&q=DragonBall&limit=10`

    const resp = await fetch( API),
      { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);

    setImages( gifs )
  };

  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">
        {
          images.map( ({id, title, url}) =>(

            <GifGridItem
              key={ id }
              url={ url }
              title= { title }
            />

          ))
        }
      </div>
    </>
  )
}
