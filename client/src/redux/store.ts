import { configureStore } from '@reduxjs/toolkit'
import earningsReducer from './reducers/earningsSlice';

// const rootReducer = combineReducers({
//   "earnings": earningsReducer
// });

export default configureStore({
  reducer: {
    earningsCalendar: earningsReducer
  }
});


// src/app/store.js

// export const store = configureStore({
//   reducer: {
//     earningsCalendar: earningsCalendarReducer,
//     financialStatement: financialStatementReducer,
//   },
//middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });
