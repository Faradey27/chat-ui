const initialState = {
  list: [],
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, createTodo(action.id, action.text)];
    case 'TOGGLE_TODO':
      return toggleTodo(state, action.id);
    default:
      return state;
  }
};

export default messages;
