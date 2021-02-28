import { configureStore } from '@reduxjs/toolkit';

import sessionLabelReducer from '../features/sessionLabel/SessionLabelSlice';
import breakLabelReducer from '../features/breakLabel/BreakLabelSlice';
import timerReducer from '../features/timer/TimerSlice';

export default configureStore({
  reducer: {
    sessionLabel: sessionLabelReducer,
    breakLabel: breakLabelReducer,
    timer: timerReducer
  }
});
