import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Counter.module.css';
import store from '../../app/store';

export function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch({type: 'prev'}) }
        >
          &lt;&lt;
        </button>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch({type: 'next'}) }
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
}
