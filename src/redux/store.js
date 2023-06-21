import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filterSlice';
import contactsReducer from './contactsSlice';
import authReduser from './authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReduser,
  },
});
