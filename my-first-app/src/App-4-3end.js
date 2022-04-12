import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, useState } from 'react';


function App() {
  // const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);
  // return <h1 onClick={() => setNumber(1)}>{number}</h1>;

  // const [checked, toggle] = useReducer(
  //     (checked) => !checked,
  //     false
  //   );

  //return (
    // <div className="App">
    //   <input type="checkbox" value={checked} onChange={toggle}></input>
    //   <p>{checked ? "checked" : "not checked"}</p>
    // </div>
  //);
  const initialState = {
    message: "hi"
  }
  
  function reducer(state, action) {
    switch(action.type){
      case "yell": return {message: `HEY! I just said ${state.message}`}
      case "whisper": return {message: `excuse me I just said ${state.message}`}
    }
  }

  const [state, dispatch] = useReducer(
      reducer,
      initialState
  );

  return (    
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({type:"yell"})}>Yell</button>
      <button onClick={() => dispatch({type:"whisper"})}>Whisper</button>
    </>
  );

}

export default App;
