import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  //Recibo el onSetCategory que le puse asi pero puede ser cualquiera, donde va recibir la función del useState del componente padre.
  const [inputValue, setInputValue] = useState('');

  

  const onInputChange = ({ target }) => {
    //en realidad viene un event, pero lo descompongo porque se que dentro tiene un event.target  
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log("InputValue de AddCategory: "+inputValue);
    if( inputValue.trim().length <= 1 ) return; //Aqui si me manda vacio lo reboto para que no me acepte ''...
    onNewCategory( inputValue.trim() );
    setInputValue('');//Vuelo a dejar en blanco la caja de texto.
  }

  // El onSubmit puede ir asi o resumido como lo dejo abajo, es lo mismo.
{/* <form onSubmit = { (event) => onSubmit(event) }></form> */}

  return (
    <form onSubmit = { onSubmit }>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value = { inputValue }
        onChange = { onInputChange }
        />        
    </form>
  );

  //Al recibir un solo evento y pasarlo entero a la función puedo obviarlo y lo pasaría igual...
  // onChange = { (event) => onInputChange(event)
}

