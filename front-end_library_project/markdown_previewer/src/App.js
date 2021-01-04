import React from 'react';
import './App.css';
import Input from './features/input/Input';
import Preview from './features/preview/Preview';

function App() {
  return (
    <div className="App">
      <h1 className="App__title">Simple Mark Down Previewer</h1>
      <Input />
      <Preview />
    </div>
  );
}

export default App;
