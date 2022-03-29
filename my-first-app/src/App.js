import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = (length) => [
  ...Array(length)
]

function Star({selected = false, onSelect}) {
  return <FaStar color = {selected ? "red" : "gray"} onClick={onSelect}/>
}

function StarRating({totalStars = 5}) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (<> 
    {createArray(totalStars).map((n, i) => (
      <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i+1)}/>
      ))}
    <p>
      {selectedStars} of {totalStars}
    </p>
    </>);
}

function App() {
  //const [status, setStatus] = useState(" Not delivered! ");
  //const [checked, setChecked] = useState(false);
  
  return (
    <div className="App">
      {/* <h1>The package is:{status}</h1>
      <button onClick={() => setStatus(" Delivered! ")}>Deliver</button> */}

      {/* <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)}></input>
      <p>{checked ? "checked" : "not checked"}</p> */}

      return <StarRating totalStars={10} />;

    </div>
  );
}

export default App;
