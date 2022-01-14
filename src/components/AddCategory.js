import React, { useState } from 'react';

function AddCategory() {

  const [inputValue, setInputValue] = useState('Hello Input');

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`El formulario ha sido enviado`);
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

export default AddCategory;
