import React, { useEffect, useState } from 'react';

export const GifGrid = ({ category }) => {

  const [count, setCount] = useState(0);

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
  };

  return (
    <>
      <h3>{ category }</h3>
      <p>{ count }</p>
      <button onClick={ () => { setCount( count + 1) } }>+1</button>
    </>
  )
}
