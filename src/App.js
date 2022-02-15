import React from 'react';

// import logo from './logo.svg';
// import './App.css';

import FunctionComp  from './Components/FunctionalComp';
import ClassComp from './Components/ClassComp';

function App() {
  return (
    <div>
      <h1>Head 1</h1>
      <h1>Head 2</h1>
      <FunctionComp></FunctionComp>
      <ClassComp></ClassComp>
    </div>
  );
}

export default App;
