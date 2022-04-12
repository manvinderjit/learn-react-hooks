import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, useState, useRef } from 'react';


function App() {
  
  //const sound = useRef();
  //const color = useRef();
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    // const soundValue = sound.current.value;
    // const colorValue = color.current.value;
    //alert(`${soundValue} sounds like ${colorValue} `);    
    // sound.current.value = "";
    // color.current.value = "";
    
    alert(`${sound} sounds like ${color} `);
    setSound("");
    setColor("#000000");
  };

  return (
    <form onSubmit={submit}>
      <input value={sound} type="text" placeholder='Sound...' onChange={(e)=> setSound(e.target.value)}/>
      <input value={color} type="color" onChange={(e)=> setColor(e.target.value)}/>
      <button>ADD</button>
    </form>
  );

}

export default App;
