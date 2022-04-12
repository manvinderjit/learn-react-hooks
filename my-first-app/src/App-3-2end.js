import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [name, setName] = useState("Jane");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`Celebrate ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? "admin" : "not admin"}`);
  }, [admin])
  return (
    <div className="App">
      <section>
        <p>Congratulations {name}!</p>
        <button onClick={() => setName("Will")}>Change Winner</button>
        <p>{admin ? "logged in" : " not logged in "}</p>
        <button onClick={() => setAdmin(true)}>Log In</button>
      </section>

    </div>
  );
}

export default App;
