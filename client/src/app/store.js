import { configureStore } from '@reduxjs/toolkit';
import hotdogsReducer from '../features/hotdogsSlice';
import {reducer as formReducer} from 'redux-form';
import logger from 'redux-logger'


export default configureStore({
  reducer: {
    hotdogs: hotdogsReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
