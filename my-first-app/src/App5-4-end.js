import './App.css';
import { useState, createContext, useContext } from 'react';
//import { TreesContext } from './';
import {useTrees} from './';

function App() {
  const {trees} = useTrees();

  return (
       <div>
         <h1>Trees I have heard of</h1>
         <ul>
           {trees.map(tree => (<li key={tree.id}>{tree.type}</li>))}
         </ul>
       </div>
  );
}

export default App;
