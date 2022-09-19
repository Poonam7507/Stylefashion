

import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import storage from 'redux-persist/lib/storage';
// import JSOG from '';


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
 
  key: 'root',
  storage,
  whitelist:['cartReducer']
}

const persistedReducer = persistReducer(persistConfig, cartReducer)


export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    //  {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    }),
})

export const persistor = persistStore(Store)