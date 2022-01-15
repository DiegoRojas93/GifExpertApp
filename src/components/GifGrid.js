// ./src/components/GifGrid.js

import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">

        { loading && <p className="animate__animated animate__flash">Loading...</p> }

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
