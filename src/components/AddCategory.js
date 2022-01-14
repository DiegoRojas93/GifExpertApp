import PropTypes from 'prop-types';
import React, { useState } from 'react';

function AddCategory( { setCategories } ) {

  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setCategories(cats => [...cats, inputValue])
    setInputValue('')   // borra el valor del input enviado
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={inputValue}
        onChange={ handleChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;
