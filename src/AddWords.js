import { createSlice } from '@reduxjs/toolkit';

// Get the saved data from local storage
const savedData = localStorage.getItem('watched');

// Check if the saved data exists and parse it back into an array or an object
const initialState = savedData ? JSON.parse(savedData) : [];

let words = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addList(state, action) {
      // Push the new item to the state
      state.push(action.payload);

      // Save the updated state to local storage
      localStorage.setItem('watched', JSON.stringify(state));
    },
    deleteList(state, action) {
      // Filter out the item with the matching ID
      const idToDelete = action.payload;
      state = state.filter((word) => word.id !== idToDelete);

      // Save the updated state to local storage
      localStorage.setItem('watched', JSON.stringify(state));
      return state;
    },
  },
});

export const { addList, deleteList } = words.actions;

export default words;
