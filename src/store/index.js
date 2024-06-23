import {configureStore} from '@reduxjs/toolkit' ;
import menuReducer from './reducers/menuReducer';

const store = configureStore({
  reducer: {
    menuList: menuReducer
  }
});

export default store;
