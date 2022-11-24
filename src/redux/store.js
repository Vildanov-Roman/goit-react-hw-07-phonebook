import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './Contacts/reducers';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export { store };
