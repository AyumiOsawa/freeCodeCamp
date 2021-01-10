import { createSlice } from '@reduxjs/toolkit';

const initialState = `# Here is the preview
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
    update(state, action) {
      return action.payload;
    }
  }
});

export const { actions, reducer } = inputSlice;
export const selectInput = state => state
