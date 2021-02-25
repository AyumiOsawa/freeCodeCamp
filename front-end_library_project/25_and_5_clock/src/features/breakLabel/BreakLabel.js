import React from 'react';

import './BreakLabel.css';

export function BreakLabel() {

  return (
    <div
      className="break-container"
    >
      <div
        id="break-label"
        className="break-label"
      >
      Break Length
      </div>
      <div
        className="break-control"
      >
        <div
          id="break-decrement"
          className="break-decrement"
        >
        ↓
        </div>
        <div
          id="break-length"
          className="break-length"
        >
          (5)
        </div>
        <div
          id="break-increment"
          className="break-increment"
        >
        ↑
        </div>
      </div>
    </div>

  )
}
