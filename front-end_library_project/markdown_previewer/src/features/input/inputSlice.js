import { createSlice } from '@reduxjs/toolkit';

const initialState = `# Mark Down Previewer
## Edit This Or Test Your Own Text Here
### Examples:
- **bold**
- _italic_
- List
  - list item
    - item in a list item

Enjoy!
`;

export const inputSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    inputUpdate(state, action) {
      return {
        ...state,
        input: action.payload
      }
    }
  }
});

export const inputUpdate = inputSlice.actions;
export default inputSlice.reducer
