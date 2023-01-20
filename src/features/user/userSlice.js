import { createSlice } from "@reduxjs/toolkit"

const initialState={
  name: '',
  skill: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setState: (state, action) => {
      const data = action.payload
      state.name = data.name
      state.skill = data.skill
    }
  }
})

export const { setState } = userSlice.actions

export default userSlice.reducer