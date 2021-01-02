import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  `# Mark Down Previewer\n
  ## Edit This Or Test Your Own Text Here\n
  ### Examples:\n
  - **bold**\n
  - _italic_\n
  - List\n
    - list item\n
      - item in a list item\n
  \n
  Enjoy!`
];

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    inputUpdate(state, action) {
      return action.payload;
    }
  }
});

export const { inputUpdate } = inputSlice.actions;
export default inputSlice.reducer
export const selectInput = state => state.input;
