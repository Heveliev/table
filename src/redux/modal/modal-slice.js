import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: false,
    reducers: {
        isOpen(state) {
           return state = !state
        }
    }
})

export const { isOpen } = modalSlice.actions;