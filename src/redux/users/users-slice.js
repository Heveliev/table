import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

 const usersSlice = createSlice({
    name: 'users',
    initialState:{items:[
        { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
        { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35 },
      ]} ,
    reducers: {
        add(state, action) {
            state.items.unshift(action.payload)
        },
        remove(state, action) {
          state.items = state.items.filter(user => user.id !== action.payload)
        },
        edit(state,action){
          const { id, name, email, age } = action.payload;
          const userIndex = state.items.findIndex((user) => user.id === id);
    
          if (userIndex !== -1) {
            state.items[userIndex] = { id, name, email, age };
          }
        }

    }
})

const persistConfig = {
  key: 'users',
  storage,
}

export const persistUsersReduser = persistReducer(
  persistConfig,
    usersSlice.reducer
)




export const { add, remove, edit} = usersSlice.actions;