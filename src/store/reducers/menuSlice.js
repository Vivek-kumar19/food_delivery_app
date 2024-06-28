import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menuList',
  initialState: [],
  reducers: {
    addMenuList: (state, action) => {
      state.push({ id: Date.now(), name: action.payload, completed: false });
    },
    
  }
});

export const { addTask, toggleTask, deleteTask } = menuSlice.actions;
export default menuSlice.reducer;
