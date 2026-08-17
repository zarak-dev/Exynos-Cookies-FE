import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";

// Import Reducers
import authReducer from "../store/slices/authSlice";
import cartReducer from "../store/slices/cartSlice";
import inventoryReducer from "../store/slices/inventorySlice";
import orderReducer from "../store/slices/orderSlice";
import userHistoryReducer from "./slices/userHistorySlice";
import reviewReducer from "./slices/reviewSlice"; //

// Import Sagas
import { watchUserHistory } from "./sagas/userHistorySaga"; //
import { reviewSaga } from "./sagas/reviewSaga";

//  Centralized Root Saga
// As we add more features, just add their watchers here
function* rootSaga() {
  yield all([fork(watchUserHistory), fork(reviewSaga)]);
}

// Initialize Middleware
const sagaMiddleware = createSagaMiddleware();

// Configure Store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    inventory: inventoryReducer,
    orders: orderReducer,
    userHistory: userHistoryReducer,
    reviews: reviewReducer,
  },
  //concatenate saga middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

//  Run the Root Saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
