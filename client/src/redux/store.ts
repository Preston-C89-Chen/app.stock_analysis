import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { earningsReducer } from './reducers/earningsSlice';

const rootReducer = combineReducers({
  "earnings": earningsReducer
});

export default configureStore({
  reducer: rootReducer
});
