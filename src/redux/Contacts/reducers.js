import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filterContacts } from './actions';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const itemsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContacts.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContacts.fulfilled]: (state, action) =>
    state.filter(elem => elem.id !== action.payload),
});

const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [addContacts.rejected]: (_, action) => action.payload,
  [deleteContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContacts.pending]: () => null,
  [deleteContacts.pending]: () => null,
});

const pendingReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
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
  isLoader: pendingReducer,
  filter: filterReducer,
});
