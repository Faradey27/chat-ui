const initialState = {
  list: [],
};

const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        list: [
          ...state.list,
          action.message
        ]
      };
    default:
      return state;
  }
};

export default messages;
