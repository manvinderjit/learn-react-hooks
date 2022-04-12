import logo from './logo.svg';
import './App.css';
import { useInput } from './useInput';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';


function App() {
  const [titleProps, resetTitleProps] = useInput("");
  const [colorProps, resetColorProps] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitleProps();
    resetColorProps();
  };

  return (
       <form onSubmit={submit}>
         <input
          {...titleProps}
          type="text"
          placeholder='Sound...'
         />
         <input
          {...colorProps}
          type="color"          
         />
         <button>Add</button>
       </form>
  );
}

export default App;
