"use client";

import { createSlice } from '@reduxjs/toolkit'

export const subPageSignal = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    openWindow: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value = 1
      console.log(state.value);
    },
    closeWindow: (state) => {
      state.value = 0
            console.log(state.value);

    },
    
  },
})

// Action creators are generated for each case reducer function
export const { openWindow, closeWindow } = subPageSignal.actions

export default subPageSignal.reducer