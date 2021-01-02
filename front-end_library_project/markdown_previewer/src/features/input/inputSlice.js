import { createSlice } from '@reduxjs/toolkit';

const initialState = `# Mark Down Previewer
  ## Edit This Or Test Your Own Text Here
  ### Examples:
  - **bold**
  - _italic_
  - List
    - list item
      - item in a list item

  [link](https://www.google.com)

  Here is an \`inline code\`
  \`\`\`
  inline code block
  \`\`\`

  > Block Quote

  image:
  ![alt text](https://# "title")

  Enjoy!`

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
