import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './Contacts/contactsSlice';
import { filterReducer } from './Contacts/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
