import { createStore } from "redux";
import todoReducer from "./reducer";

// Creating a Redux store with the todoReducer
const store = createStore(todoReducer);

export default store;
