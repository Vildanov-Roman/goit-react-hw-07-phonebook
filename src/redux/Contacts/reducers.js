import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filterContacts } from './actions';
import { getContacts, addContacts, deleteContacts } from './operations';

const itemsReducer = createReducer([], {
  [getContacts.fulfilled]: (_, action) => action.payload,
  [addContacts.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContacts.fulfilled]: (state, action) =>
    state.filter(elem => elem.id !== action.payload),
});

const errorReducer = createReducer(null, {
  [getContacts.rejected]: (_, action) => action.payload,
  [addContacts.rejected]: (_, action) => action.payload,
  [deleteContacts.rejected]: (_, action) => action.payload,
  [getContacts.pending]: () => null,
  [addContacts.pending]: () => null,
  [deleteContacts.pending]: () => null,
});

const pendingReducer = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [addContacts.pending]: () => true,
  [addContacts.fulfilled]: () => false,
  [addContacts.rejected]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => false,
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  error: errorReducer,
  pending: pendingReducer,
  filter: filterReducer,
});
