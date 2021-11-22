// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// export const store = createStore(
//   phonebookReducer,
//   composeWithDevTools(applyMiddleware()),
// );
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { phonebookReducer } from './app/app-phonebook-reducer';
import { contactsApi } from './app/operation';
import filter from './app/app-phonebook-reducer';
// const phonebookPersistConfig = {
//   key: 'contact',
//   storage,
//   blacklist: ['filter'],
// };
// const persisteReducer = persistReducer(
//   phonebookPersistConfig,
//   phonebookReducer,
// );
export const store = configureStore({
  reducer: {
    // contacts: phonebookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    getFilter: filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(
      {
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      },
      //   ПЕРЕВІРИТИ ЧИ ВПЛИВАЄ НА ПЕРВІРКУ
    )
      // .concat(logger)
      .concat(contactsApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
