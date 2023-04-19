import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';
import {persistUsersReduser } from './users/users-slice';
import { modalSlice} from './modal/modal-slice';





export const store = configureStore({
    reducer: {
        users: persistUsersReduser,
        modal: modalSlice.reducer,
  },
   middleware(getDefaultMiddleware){
   return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })},
})

export const persisotor = persistStore(store);
