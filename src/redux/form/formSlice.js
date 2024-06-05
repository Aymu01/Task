import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addData: (state,action) => {
      state.data = action.payload
    },
  },
})
export const { addData } = formSlice.actions

export default formSlice.reducer