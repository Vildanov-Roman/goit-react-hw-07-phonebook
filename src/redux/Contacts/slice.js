// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialState = {
//     contacts: {
//         items: [],
//         isLoading: false,
//         error: null
//     },
//     filter: ""
// };

// const contactSlice = createSlice({
//   name: 'contact',
//   initialState,
//   reducers: {
//     addUserData : (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
//     },

//     filterContact: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const contactsReducer = persistReducer(persistConfig, contactSlice.reducer)

// export const { addUserData , deleteContact, filterContact } =
// contactSlice.actions;

// export default contactSlice.reducer;

// Selectors

// export const getFilter = state => state.contacts.filter;

// export const getContact = state => state.contacts.contacts;
