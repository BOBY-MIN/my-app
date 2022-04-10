import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import MyForm from './MyForm';
import CounterReduce from './CounterWithReduce';
import ReducerSample from './ReducerSample';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CounterContainer from './containers/CounterContainer';
import { TodosContextProvider } from './contexts/TodosContext';
import Counter from './components/Counter';

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
        {/* <TodoForm />
        <TodoList /> */}
        {/* TodosContextProvider 내부에서 Provider 태그 구현중
            TodosContext 에 dispatch 객체와 state 객체와 hook 구현중
            TodoForm, TodoList 에서는 TodosContext 에서 구현한 hook을 이용
        */}
        <TodosContextProvider>
            <TodoForm />
            <TodoList />
        </TodosContextProvider>
        <CounterContainer />
      </header>
    </div>
  );
}

export default App;
