import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    contacts: '',
  },
  reducers: {
    filterContscts(state, action) {
      state.contacts = action.payload;
    },
  },
});

export const { filterContscts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
