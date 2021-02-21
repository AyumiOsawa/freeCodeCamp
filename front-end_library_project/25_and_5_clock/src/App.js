import React from 'react';

import { BreakLabel } from './features/breakLabel/BreakLabel';
import { SessionLabel } from './features/sessionLabel/SessionLabel';
import { Timer } from './features/timer/Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="label_container">
        <BreakLabel />
        <SessionLabel />
      </div>
    <Timer />
    </div>
  );
}

export default App;
