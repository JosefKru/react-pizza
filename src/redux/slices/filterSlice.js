import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sortType: {
    name: 'популярности',
    sortProperty: 'rating',
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    setSortType: (state, action) => {
      state.sortType = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortType } = filterSlice.actions

export default filterSlice.reducer
