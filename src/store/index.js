import {configureStore} from '@reduxjs/toolkit' ;
import menuSlice from './reducers/menuSlice';

const store = configureStore({
  reducer: {
    menuList: menuSlice
  }
});

export default store;
