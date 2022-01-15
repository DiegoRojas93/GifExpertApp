// ./src/components/GifGrid.js

import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGifs();

  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">

        { loading ? 'Cargando...' : `Data cargada: ${data}`}

      </div>
    </>
  )
}
