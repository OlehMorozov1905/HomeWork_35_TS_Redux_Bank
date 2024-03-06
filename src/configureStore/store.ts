import { createStore } from "redux";
import accountReducer from "../reducers/accountReducer";


export const store = createStore(accountReducer);



