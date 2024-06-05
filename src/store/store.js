import { configureStore } from '@reduxjs/toolkit'
import formSlice from '../redux/form/formSlice'
export const store = configureStore({
  reducer: {
    form: formSlice,
  },
})