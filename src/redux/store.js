import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filterReducer } from './filterSlice';

const persistConfige = {
    key: 'root',
    storage,    
}

const persistedReducer = persistReducer(persistConfige, todoReducer);

export const store = configureStore({
    reducer: {
        todos: persistedReducer,
        filter: filterReducer,
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store);



