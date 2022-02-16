import React from 'react';

// import logo from './logo.svg';
import './App.css';

import { FunctionComp ,FunctionComp2 }   from './Components/FunctionalComp';   
import { ClassComp ,ClassComp2 } from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';
import ClassProps from './Components/ClassProps';

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
      <br></br>
      <h4>Pure Component</h4>
      <ParentComp />
      <h3>Class Props</h3>

      <ClassProps name = "test" place="place">
        <p>child Component</p>
      </ClassProps>

      <ClassProps name = "test2" place="place2">
        <button>child Component</button>
      </ClassProps>
    </div>
  );
}

export default App;
