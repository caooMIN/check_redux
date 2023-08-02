import { createStore } from "redux";
import { toDoReducer } from "../Reducers/Reducers";

export const store = createStore(
  toDoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
