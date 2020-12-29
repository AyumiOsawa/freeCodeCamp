const initialState = {
  id: 0
};

const counterReducer = (state = initialState, action) => {
  console.log('counter Redu, state TYPE', state);
  let newId;
  switch(action.type) {
    case 'next':
      newId = state.id + 1;
      return {id: newId};
    case 'prev':
      newId = state.id - 1;
      return {id: newId};
    default:
      return state;
  };
};

export default counterReducer;
