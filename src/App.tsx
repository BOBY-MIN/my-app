import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import CounterReduce from './CounterWithReduce';
import ReducerSample from './ReducerSample';

function App() {
  
  // Greetings 이벤트
  const onClick = (name: string) =>{
    console.log(`${name} say hello`);
  }

  // MyForm 이벤트
  const onSubmit = (form: { name: string; description: string; }) => {
    console.log(form);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <Greetings name='상민' optional='아하!!'></Greetings> */}
        <Greetings name='민희' onClick={onClick}></Greetings>
        <Counter/>
        <MyForm onSubmit={onSubmit} />
        <CounterReduce />
        <ReducerSample />
      </header>
    </div>
  );
}

export default App;
