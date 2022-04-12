import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { useFetch } from './useFetch';

//export const TreesContext = createContext();

function App ({login}) {
  const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);
  if(loading) return (<h1>loading...</h1>);
  if(error) return (<pre>{JSON.stringify(error, null, 2)}</pre>);
  return (
    <div>
      <h1>{data.login}</h1>
      {data.name && <p>{data.name}</p>}
    </div>
  )
}


ReactDOM.render(  
    <App login=""/>,  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
