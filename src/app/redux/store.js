"use client";

import { configureStore } from '@reduxjs/toolkit'
import subPageSignal from './subPageSignal'

export default configureStore({
  reducer: {
    subPageStore: subPageSignal
  },
})