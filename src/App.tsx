import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) =>{
    console.log(`${name} say hello`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Greetings name='상민' optional='아하!!'></Greetings> */}
        <Greetings name='상민' onClick={onClick}></Greetings>
      </header>
    </div>
  );
}

export default App;
