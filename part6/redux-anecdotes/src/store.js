import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import acnecdoteReducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import filterReducer from "./reducers/filterReducer";

const reducer = combineReducers({
  anecdotes: acnecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
