import uuidv4 from 'uuid/v4';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
})
