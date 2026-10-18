import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navabr";

function App() {
  const [Value, setValue] = useState(0)
  return (
    <div className="App">
      <Navbar/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <div className="value"> {Value} </div>
       <button onClick={()=>{setValue(Value+1)}}>click me!</button>
    </div>
  );
}

export default App;
