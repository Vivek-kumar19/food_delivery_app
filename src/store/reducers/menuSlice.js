import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menuList',
  initialState: [],
  reducers: {
    addMenuList: (state, action) => {
      state.push({ data : action.payload});
    },
    
  }
});

export const { addMenuList } = menuSlice.actions;
export default menuSlice.reducer;
