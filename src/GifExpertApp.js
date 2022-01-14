import React, { useState } from 'react';
import AddCategory from './components/AddCategory';


function GifExpertApp() {

  const [categories, setCategories] = useState(
    ['One Punch', 'Samurai X', 'Dragon Ball']
  );

  const handleApp = title => {
    setCategories( cats => [ ...cats, title ] )
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />

      <hr />

      <button onClick={() => handleApp('SevenDailySins')}> Add </button>

      <ol>
        {
          categories.map( category => <li key={ category }>{ category }</li>)
        }
      </ol>
    </>
  )
}

export default GifExpertApp
