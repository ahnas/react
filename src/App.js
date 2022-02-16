import React from 'react';

// import logo from './logo.svg';
import './App.css';

import { FunctionComp ,FunctionComp2 }   from './Components/FunctionalComp';   
import { ClassComp ,ClassComp2 } from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';

function App () {
  return (
    <div className='App-header'>
      
      <h1>Function Components</h1>
      <FunctionComp />
      <FunctionComp2 />

      <h1>Class Components</h1>
      <ClassComp />
      <ClassComp2 />
      <Click />
      <Counter />
    </div>
  );
}

export default App;
